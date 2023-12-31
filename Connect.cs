﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ABC.Models
{
    public class Connect

    {
        [Required(ErrorMessage = "Name is Required")]
        [Display(Name = "Full Name")]
        public string Fullname { get; set; }
        [Required(ErrorMessage = "Email is Required")]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                            @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                            @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
                            ErrorMessage = "Email is not valid")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Topic is Required")]
        [Display(Name = "Topic on")]
        public string Topic { get; set; }
        [Required(ErrorMessage = "Name is Required")]
        [Display(Name = "Description")]
        public string Message { get; set; }
        [Required(ErrorMessage = "State is Required")]
        public string State { get; set; }

    }
}