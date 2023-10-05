using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ABC.Models
{
    public class Productlist
    {
        public int id { get; set; }

        [Required(ErrorMessage = "Product Name is required")]
        public String ProductName { get; set; }

        [Required(ErrorMessage = "Category Id is required")]
        public int CategoryId { get; set; }

        [Required(ErrorMessage = "Category Name is required")]
        public String CategoryName { get; set; }

    }
}