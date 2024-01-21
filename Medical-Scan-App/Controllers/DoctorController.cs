using Medical_Scan_App.Models;
using Medical_Scan_App.ModelView;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Medical_Scan_App.Controllers
{
    public class DoctorController : Controller
    {
        private readonly MedicalScanContext context;
        public DoctorController(MedicalScanContext _context)
        {
            context = _context;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetSpecialties()
        {
            List<Specialty> specialties = context.Specialties.ToList();
            return View(specialties);
        }

        public IActionResult GetDoctorsBySpecialties(int specialtyId)

        {
            DoctorVM doctorVM = new DoctorVM();
            var doctors = context.Doctors
                            .Include(d => d.DoctorSpecialties)
                            .ThenInclude(ds => ds.Specialty)
                            .Where(d => specialtyId == null || specialtyId == 0 || d.DoctorSpecialties.Any(ds => ds.SpecialtyID == specialtyId))                      
                            .ToList();
            doctorVM.DoctorsVM = doctors;

            

            return Json(doctors);
        }

    }
}
