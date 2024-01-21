using Microsoft.EntityFrameworkCore;

namespace Medical_Scan_App.Models
{
    public class MedicalScanContext:DbContext
    {
        public MedicalScanContext(DbContextOptions<MedicalScanContext> options) : base(options) 
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            modelBuilder.Entity<Doctor>()
                .HasMany(d => d.DoctorSpecialties)
                .WithOne(ds => ds.Doctor)
                .HasForeignKey(ds => ds.DoctorID);

            modelBuilder.Entity<Specialty>()
                .HasMany(s => s.DoctorSpecialties)
                .WithOne(ds => ds.Specialty)
                .HasForeignKey(ds => ds.SpecialtyID);

            modelBuilder.Entity<DoctorSpecialty>()
                .HasKey(ds => new { ds.DoctorID, ds.SpecialtyID });

        }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Specialty> Specialties { get; set; }
        public virtual DbSet<DoctorSpecialty> DoctorSpecialties { get; set; }
    }
}
