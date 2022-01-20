using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            
            return View();
        }

        public IActionResult Calc ()
        {
            return View();
        }
    }
}
