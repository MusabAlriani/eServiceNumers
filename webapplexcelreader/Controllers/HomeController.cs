using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using WebApplExcelReader.Models;

namespace WebApplExcelReader.Controllers
{
    public class HomeController : Controller
    {
        private static List<PhoneNumbers> phoneNumbersList;

        public HomeController()
        {
            phoneNumbersList = new List<PhoneNumbers>();
        }

        private string path = System.Web.HttpContext.Current.Server.MapPath("~/files/Number.xlsx");

        //sheet2 has been added at MonDay 1/22/2018
        private string sheet = "sheet2";

        public ActionResult First(string number)
        {
            var excelData = new ExcelData(path);

            var phoneNumbers = excelData.getData(sheet);

            foreach (var row in phoneNumbers)
            {
                var phone = new PhoneNumbers()
                {
                    Id = row["Id"].ToString(),
                    PhoneNumber = row["PhoneNumber"].ToString()
                };
                phoneNumbersList.Add(phone);
            }

            ViewBag.price = "";
            ViewBag.number = number;

            var query = phoneNumbersList.Where(x => x.PhoneNumber == number).ToList();

            return View(query);
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Title()
        {
            return View();
        }

        public ActionResult service()
        {
            return View();
        }

        public ActionResult Services0800()
        {
            return View();
        }

        public ActionResult Services0900()
        {
            return View();
        }

        public ActionResult Services15()
        {
            return View();
        }

        public ActionResult Services14()
        {
            return View();
        }

        public ActionResult MainPage()
        {
            return View();
        }

        public ActionResult ValueAddedServises()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Numbers14(string number14)
        {
            var excelData = new ExcelData(path);
            var phoneNumbers = excelData.getData(sheet);

            foreach (var row in phoneNumbers)
            {
                var phone = new PhoneNumbers()
                {
                    Id = row["Id"].ToString(),
                    Number14xx = row["14xx"].ToString()
                };
                phoneNumbersList.Add(phone);
            }

            ViewBag.price = "";
            ViewBag.number14 = number14;
            number14 = "14" + number14;
            var query = phoneNumbersList.Where(x => x.Number14xx == number14).ToList();

            return View(query);
        }

        [HttpGet]
        public ActionResult Numbers15(string number15)
        {
            var excelData = new ExcelData(path);
            var phoneNumbers = excelData.getData(sheet);

            foreach (var row in phoneNumbers)
            {
                var phone = new PhoneNumbers()
                {
                    Id = row["Id"].ToString(),
                    Number15xx = row["15xx"].ToString()
                };
                phoneNumbersList.Add(phone);
            }

            ViewBag.price = "";
            ViewBag.number15 = number15;
            number15 = "15" + number15;
            var query = phoneNumbersList.Where(x => x.Number15xx == number15).ToList();

            return View(query);
        }

        [HttpGet]
        public ActionResult Number0800(string number0800)
        {
            var excelData = new ExcelData(path);
            var phoneNumbers = excelData.getData(sheet);

            foreach (var row in phoneNumbers)
            {
                var phone = new PhoneNumbers()
                {
                    Id = row["Id"].ToString(),
                    Number800xxxxxx = row["800xxxxxx"].ToString()
                };
                phoneNumbersList.Add(phone);
            }

            ViewBag.price = "";
            ViewBag.number0800 = number0800;
            number0800 = "0800" + number0800;
            var query = phoneNumbersList.Where(x => x.Number800xxxxxx == number0800).ToList();
            return View(query);
        }

        [HttpGet]
        public ActionResult Number0900(string number0900)
        {
            var excelData = new ExcelData(path);
            var phoneNumbers = excelData.getData(sheet);

            foreach (var row in phoneNumbers)
            {
                var phone = new PhoneNumbers()
                {
                    Id = row["Id"].ToString(),
                    Number900xxxxxx = row["900yxxxxx"].ToString()
                };
                phoneNumbersList.Add(phone);
            }

            ViewBag.price = "";
            ViewBag.number0900 = number0900;
            number0900 = "0900" + number0900;
            var query = phoneNumbersList.Where(x => x.Number900xxxxxx == number0900).ToList();
            return View(query);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}