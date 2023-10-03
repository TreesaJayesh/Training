using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ABC.Models;

namespace ABC.Controllers
{
  
    public class Login1_ABCController : Controller
    {
        // GET: Login1_ABC
        EcommerceEntities4 ecommerceentities = new EcommerceEntities4();
        public ActionResult Index()
        {
            return View(ecommerceentities.Login_ABC.ToList());

        }

       public ActionResult Logout()
       {
            Session.Clear();
            return RedirectToAction("Index", "Login1_ABC");

       }
        public ActionResult Create()
        {
            return View();

        }
        [HttpPost]
        public ActionResult Create(Login_ABC login_ABC)
        {
            try
            {
                ecommerceentities.Login_ABC.Add(login_ABC);
                ecommerceentities.SaveChanges();
                return RedirectToAction("Index", "Login1_ABC");
            }
            catch
            {
                return View();
            }



        }
        public ActionResult Details(int Id)
        {
            return View(ecommerceentities.Login_ABC.Where(x => x.Id == Id).FirstOrDefault());

        }
        public ActionResult Edit(int Id)
        {
            return View(ecommerceentities.Login_ABC.Where(x => x.Id == Id).FirstOrDefault());

        }
        [HttpPost]
        public ActionResult Edit(int Id,Login_ABC login_ABC)
        {
            try
            {
                
                ecommerceentities.Entry(login_ABC).State=EntityState.Modified;
                ecommerceentities.SaveChanges();
                return RedirectToAction("Index", "Login1_ABC");
            }
            catch
            {
                return View();
            }



        }
        public ActionResult Delete(int Id)
        {
            return View(ecommerceentities.Login_ABC.Where(x => x.Id == Id).FirstOrDefault());

        }
        [HttpPost]
        public ActionResult Delete(int Id,FormCollection collection)
        {
            try
            {
                Login_ABC login_ABC=ecommerceentities.Login_ABC.Where(x=>x.Id == Id).FirstOrDefault();  
                ecommerceentities.Login_ABC.Remove(login_ABC);
                ecommerceentities.SaveChanges();
                return RedirectToAction("Index","Login1_ABC");
            }
            catch 
            { 
                return View();
            }

           

        }

        public ActionResult Signup()
        {
            return View();

        }
        [HttpPost]
        public ActionResult Signup(Login_ABC login_ABC)
        {


            if (ecommerceentities.Login_ABC.Any(x => x.Username == login_ABC.Username))
            {
                ViewBag.Notification = "You are already a member";

                return View(Login_ABC);
            }
            else
            {

                ecommerceentities.Login_ABC.Add(login_ABC);
                try
                {
                    ecommerceentities.SaveChanges();
                }
                catch(DbEntityValidationException e)
                {
                    Console.WriteLine(e);
                
                }
                
                Session["Id"] = login_ABC.Id.ToString();
                Session["Username"] = login_ABC.Username.ToString();
                
               
                    return RedirectToAction("Index", "Login1_ABC");
               
               
               


            }
            /*     public ActionResult Index()
             {
                 return View();

             }
             public ActionResult Index()
             {
                 return View();

             }   */
        }
    }
}