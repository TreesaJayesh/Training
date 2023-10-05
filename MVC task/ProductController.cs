using ABC.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ABC.Models;
using System.Web.Optimization;

namespace ABC.Controllers
{
    public class ProductController : Controller
    {
        DAL DAL = new DAL();  
        // GET: Product
        public ActionResult List()
        {
            var data = DAL.GetUsers();
            return View(data);
        }
        public ActionResult Create()
        {
           
            return View();
        }
        [HttpPost]
        public ActionResult Create(Productlist productlist)
        {

            if (DAL.InsertUser(productlist))
            {
                TempData["InsertMsg"] = "User saved successful";
                return RedirectToAction("List");
            }
            else 
            {
                TempData["InsertErrorMsg"] = "Data not saved";
            }
            return View();
        }
       public ActionResult Details(int id)
        {

            var data = DAL.GetUsers().Find(a => a.id == id);
            return View(data);
        }
        public ActionResult Edit(int id)
        {
            var data = DAL.GetUsers().Find(a=>a.id== id);
            return View(data);
        }
        [HttpPost]
        public ActionResult Edit(Productlist productlist)
        {

            if (DAL.UpdateUser(productlist))
            {
                TempData["UpdateMsg"] = "User updated successful";
                return RedirectToAction("List");
            }
            else
            {
                TempData["UpdateErrorMsg"] = "Data not updated";
            }
            return View();
        }
       
        public ActionResult Delete(int id) 
        {


            int r = DAL.DeleteUser(id);
                if(r>0)
               {
                TempData["DeleteMsg"] = "User deletedsuccessful";
                return RedirectToAction("List");
            }
            else
            {
                TempData["DeleteErrorMsg"] = "Data not deleted";
            }
            return View();
        }
    }
}