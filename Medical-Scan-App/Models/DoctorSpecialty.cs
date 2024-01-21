namespace Medical_Scan_App.Models
{
    public class DoctorSpecialty
    {
        public int DoctorID { get; set; }
        public int SpecialtyID { get; set; }
        public Doctor Doctor { get; set; }
        public Specialty Specialty { get; set; }
    }
}
