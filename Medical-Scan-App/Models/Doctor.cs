namespace Medical_Scan_App.Models
{
    public class Doctor
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public List<DoctorSpecialty> DoctorSpecialties { get; set; }

    }
}
