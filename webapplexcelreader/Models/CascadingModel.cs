using System.Collections.Generic;
using System.Web.Mvc;

namespace WebApplExcelReader.Models
{
    public class CascadingModel
    {
        public CascadingModel()
        {
            this.Categories = new List<SelectListItem>();
            this.Companies = new List<SelectListItem>();
            this.DeviceTypes = new List<SelectListItem>();
            this.Devicies = new List<SelectListItem>();
            this.Models = new List<SelectListItem>();
            //this.dbViewModel = new List<CascadingViewModel>();
        }

        public List<SelectListItem> Categories { get; set; }
        public List<SelectListItem> Companies { get; set; }
        public List<SelectListItem> DeviceTypes { get; set; }
        public List<SelectListItem> Devicies { get; set; }
        public List<SelectListItem> Models { get; set; }

        public List<ResultTable> dbViewModel { get; set; }

        public int categoryId { get; set; }
        public int companyId { get; set; }
        public int deviceTypeId { get; set; }
        public int DeviceId { get; set; }
        public int ModelId { get; set; }
    }
}