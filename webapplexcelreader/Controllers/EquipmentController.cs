using PagedList;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Web.Mvc;
using WebApplExcelReader.Models;

namespace WebApplExcelReader.Controllers
{
    public class EquipmentController : Controller
    {
        private static List<EquipmentsInfo> equipmentsInfoList;
        private EquipmentApprovalModel context;
        private CascadingModel model;
        private DataTable DT;
        private SqlDataAdapter DA;
        private SqlCommand CMD;
        private SqlConnection Con = new SqlConnection(ConfigurationManager.ConnectionStrings["EquipmentApprovalModel1"].ConnectionString);
        private string SQLQuery;

        public EquipmentController()
        {
            equipmentsInfoList = new List<EquipmentsInfo>();
            context = new EquipmentApprovalModel();
            model = new CascadingModel();
            DT = new DataTable();
        }

        private static ResultTable CreateItem<ResultTable>(DataRow row)
        {
            ResultTable obj = default(ResultTable);
            if (row != null)
            {
                obj = Activator.CreateInstance<ResultTable>();

                foreach (DataColumn column in row.Table.Columns)
                {
                    PropertyInfo prop = obj.GetType().GetProperty(column.ColumnName);
                    try
                    {
                        object value = row[column.ColumnName];
                        prop.SetValue(obj, value, null);
                    }
                    catch
                    {
                        // You can log something here
                        throw;
                    }
                }
            }

            return obj;
        }

        private List<ResultTable> GetDb()//int? page)
        {
            SQLQuery = "Select * from ResultTable";
            DA = new SqlDataAdapter(SQLQuery, Con);
            DA.Fill(DT);

            List<DataRow> Dt = DT.AsEnumerable().ToList();

            List<ResultTable> query = null;

            if (Dt != null)
            {
                query = new List<ResultTable>();

                foreach (DataRow row in Dt)
                {
                    ResultTable item = CreateItem<ResultTable>(row);
                    query.Add(item);
                }
            }

            return query;//.ToPagedList(page ?? 1, 5);
        }

        [HttpGet]
        public ActionResult Index()//int? page)
        {
            foreach (var category in context.Category)
            {
                model.Categories.Add(new SelectListItem { Text = category.Name, Value = category.CategoryId.ToString() });
            }
            List<ResultTable> query = GetDb();//page);
            model.dbViewModel = query;
            return View(model);
        }

        [HttpPost]
        public ActionResult Index(int? CategoryId, int? CompanyId, int? DeviceTypeId, int? DeviceId, int? ModelId, string searchTerm)//, int? page)
        {
            List<ResultTable> query = GetDb();//page);
            foreach (var category in context.Category)
            {
                model.Categories.Add(new SelectListItem { Text = category.Name, Value = category.CategoryId.ToString() });
            }
            if (CategoryId.HasValue)
            {
                var companies = (from company in context.Company
                                 where company.CategoryId == CategoryId.Value
                                 select company).ToList();

                foreach (var company in companies)
                {
                    model.Companies.Add(new SelectListItem { Text = company.Name, Value = company.CompanyId.ToString() });
                }

                model.dbViewModel = query.Where(x => x.CategoryId == CategoryId.Value).ToList();//.ToPagedList(page ?? 1, 5);

                if (CompanyId.HasValue)
                {
                    #region if

                    var deviceTypes = context.DeviceType.Where(x => x.Company.Any(s => s.CompanyId == CompanyId.Value)).ToList();

                    foreach (var deviceType in deviceTypes)
                    {
                        model.DeviceTypes.Add(new SelectListItem { Text = deviceType.Name, Value = deviceType.DeviceTypeId.ToString() });
                    }

                    model.dbViewModel = query.Where(x => x.CategoryId == CategoryId.Value)
                                             .Where(x => x.CompanyId == CompanyId.Value)
                                             .ToList();
                    //   .ToPagedList(page ?? 1, 5);

                    if (DeviceTypeId.HasValue)
                    {
                        var devices = (from device in context.Device

                                       where device.DeviceTypeId == DeviceTypeId.Value
                                       && device.CompanyId == CompanyId.Value

                                       select device).ToList();

                        foreach (var device in devices)
                        {
                            model.Devicies.Add(new SelectListItem { Text = device.Name, Value = device.DeviceId.ToString() });
                        }

                        model.dbViewModel = query.Where(x => x.CategoryId == CategoryId.Value)
                                       .Where(x => x.CompanyId == CompanyId.Value)
                                       .Where(x => x.DeviceTypeId == DeviceTypeId.Value)
                                       .ToList();
                        //.ToPagedList(page ?? 1, 5);

                        if (DeviceId.HasValue)
                        {
                            var models = (from model in context.Model
                                          where model.DeviceId == DeviceId.Value
                                          select model).ToList();

                            foreach (var modelItem in models)
                            {
                                model.Models.Add(new SelectListItem { Text = modelItem.Name, Value = modelItem.ModelId.ToString() });
                            }

                            model.dbViewModel = query.Where(x => x.CategoryId == CategoryId.Value)
                                       .Where(x => x.CompanyId == CompanyId.Value)
                                       .Where(x => x.DeviceTypeId == DeviceTypeId.Value)
                                       .Where(x => x.DeviceId == DeviceId.Value)
                                       .ToList();
                            //.ToPagedList(page ?? 1, 5);
                            if (ModelId.HasValue)
                            {
                                model.dbViewModel = query.Where(x => x.CategoryId == CategoryId.Value)
                                        .Where(x => x.CompanyId == CompanyId.Value)
                                        .Where(x => x.DeviceTypeId == DeviceTypeId.Value)
                                        .Where(x => x.DeviceId == DeviceId.Value)
                                        .Where(x => x.ModelId == ModelId.Value)
                                        .ToList();
                                //.ToPagedList(page ?? 1, 5);
                            }
                        }
                    }

                    #endregion if
                }
            }
            else if (!String.IsNullOrEmpty(searchTerm))
            {
                model.dbViewModel = query.Where(x => (x.CategoryName.StartsWith(searchTerm) || x.CompanyName.StartsWith(searchTerm)
                                                     || x.DeviceTypeName.StartsWith(searchTerm) || x.DeviceName.StartsWith(searchTerm)
                                                     || x.ModelName.StartsWith(searchTerm) || x.ModelName.StartsWith(searchTerm))).ToList();
            }
            if (model.dbViewModel == null)
            {
                return RedirectToAction("index", "Equipment");
            }
            else
            {
                return View(model);
            }
        }

        public JsonResult GetRecords(string term)
        {
            var query = GetDb();
            List<string> category = query.Where(x => x.CategoryName.ToLower().StartsWith(term.ToLower())).Select(x => x.CategoryName).ToList();
            List<string> company = query.Where(x => x.CompanyName.ToLower().StartsWith(term.ToLower())).Select(x => x.CompanyName).ToList();
            List<string> deviceTypeName = query.Where(x => x.DeviceTypeName.ToLower().StartsWith(term.ToLower())).Select(x => x.DeviceTypeName).ToList();
            List<string> deviceName = query.Where(x => x.DeviceName.ToLower().StartsWith(term.ToLower())).Select(x => x.DeviceName).ToList();
            List<string> modelName = query.Where(x => x.ModelName.ToLower().StartsWith(term.ToLower())).Select(x => x.ModelName).ToList();
            List<string> stringArray = new List<string>();
            stringArray.AddRange(category);
            stringArray.AddRange(company);
            stringArray.AddRange(deviceTypeName);
            stringArray.AddRange(deviceName);
            stringArray.AddRange(modelName);

            return Json(stringArray.Distinct().ToList(), JsonRequestBehavior.AllowGet);
        }

        private string equipmentPath = System.Web.HttpContext.Current.Server.MapPath("~/files/Equipment2.xls");
        private string equipmentSheet = "sheet1";

        public IEnumerable<EquipmentsInfo> GetEquipmentInfoSheet()
        {
            var excelData = new ExcelData(equipmentPath);
            var equipmentsInfoSheet = excelData.getData(equipmentSheet);

            foreach (var row in equipmentsInfoSheet)
            {
                var equipmentList = new EquipmentsInfo()
                {
                    Id = row["LicenceNo"].ToString(),
                    Manufucture = row["Manufucturer"].ToString(),
                    DeviceName = row["Model"].ToString(),
                    DeviceType = row["DeviceType"].ToString()
                };
                equipmentsInfoList.Add(equipmentList);
            }

            return equipmentsInfoList;
        }

        public ActionResult Equip1(string search, int? page)
        {
            IEnumerable<EquipmentsInfo> equipmentsInfoList = GetEquipmentInfoSheet();

            IEnumerable<EquipmentsInfo> query;
            if (!String.IsNullOrEmpty(search))
            {
                query = equipmentsInfoList.Where(x => (x.Manufucture.ToLower()
                                                  .StartsWith(search.ToLower())
                                                 || x.DeviceType.ToLower()
                                                 .StartsWith(search.ToLower())
                                                 || x.DeviceName.ToLower()
                                                 .StartsWith(search.ToLower())
                                                  )).ToList().ToPagedList(page ?? 1, 10);
            }
            else
            {
                query = equipmentsInfoList.ToList().ToPagedList(page ?? 1, 10);
            }
            return View(query);
        }
    }
}