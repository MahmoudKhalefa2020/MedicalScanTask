namespace Medical_Scan_App.Models
{
    public class Specialty
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public List<DoctorSpecialty> DoctorSpecialties { get; set; }
    }
}
