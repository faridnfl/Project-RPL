<style>
@import url("/assets/css/inbound.css");
</style>

<template>
  <div class="inbound-isi">
    <div class="inbound-board">
      <div class="inbound-top">
        <h1>INBOUND LECTURER, ACADEMIC STAFF, AND STUDENT<br>DATA FOR UNHAS</h1>
      </div>
      <div class="form">
        <div class="form1"> 
            <p>Nama Penginput data (Name of Data Submitter)*</p>
            <input type="text" placeholder="Your Answer...">
            <p>Nama Tamu (Guess Name)*</p>
            <input type="text" placeholder="Your Answer...">
            <p>Kewarganegaraan (Nationality)*</p>
            <input type="text" placeholder="Your Answer...">
            <p>E-mail Tamu (Guest's email)*</p>
            <input type="text" placeholder="Your Answer...">
        </div>
        <div class="form2"> 
            <p>Institusi Asal (Home Institution)*</p>
            <input type="text" placeholder="Your Answer...">
            <p>Posisi (Position)*</p>
            <select>
              <option disabled selected value="">Choose...</option>
              <option value="option1">Dosen (Lecturer)</option>
              <option value="option2">Professor</option>
              <option value="option3">Mahasiswa Sarjana (Student: Undergraduate)</option>
              <option value="option3">Mahasiswa Magister (Student: Master)</option>
              <option value="option3">Mahasiswa Doktor (Student: Doctoral/PhD)</option>
              <option value="option3">Staf Akademik (Academic Staff)</option>
            </select>
        </div>
        <div class="form3"> 
            <p>Nama Program/Event (Program/Event Name)*</p>
            <input type="text" placeholder="Your Answer...">
            <p>Tujuan Inbound (Purpose of inbound)*</p>
            <select>
              <option disabled selected value="">Choose...</option>
              <option value="option1">Participate inshort course/training</option>
              <option value="option2">Guest Lecture/Visiting Lecture/Public Lecture</option>
              <option value="option3">Joint Research</option>
              <option value="option4">Oral Presentation</option>
              <option value="option5">MoU/MoA/IA Initiation</option>
              <option value="option6">Formation of Consortium Activity</option>
              <option value="option7">Expo/Promotion of University</option>
              <option value="option8">Employer Reputation/Dana Abadi</option>
              <option value="option9">Student Exchange/Summer Program</option>
              <option value="option10">Internship</option>
              <option value="option11">Joint/Double Degree Program</option>
            </select>
            <p>Type of Program*</p>
            <select id="options">
              <option disabled selected value="">Choose...</option>
              <option value="option1">Offline</option>
              <option value="option2">Online</option>
              <option value="option4">Hybrid (Offline and Online)</option>
            </select>
            <div class="date">
              <div class="date_arrival">
                <p>Tanggal Kedatangan (Arrival Date)*</p>
                <input type="date" placeholder="Your Answer...">
              </div>
              <div class="date_departure">
                <p>Tanggal Keberangkatan (Departure Date)*</p>
                <input type="date" placeholder="Your Answer...">
              </div>
            </div>
            <p>Durasi Program (Program Duration)*</p>
            <input type="text" placeholder="Your Answer...">
            <p>Penyelenggara (Host)*</p>
            <select>
              <option disabled selected value="">Choose...</option>
              <option value="option1">Fakultas Ekonomi dan Bisnis (Faculty of Economic and Business)</option>
              <option value="option2">Fakultas Hukum (Faculty of Law)</option>
              <option value="option3">Fakultas Kedokteran (Faculty of Medicine)</option>
              <option value="option4">Fakultas Teknik (Faculty of Engineering)</option>
              <option value="option5">Fakultas Ilmu Sosial dan Ilmu Politik (Faculty of Social and Political Sciences)</option>
              <option value="option6">Fakultas Ilmu Budaya (Faculty of Cultural Sciences)</option>
              <option value="option7">Fakultas Peternakan (Faculty of Animal Sciences)</option>
              <option value="option8">Fakultas Matematika dan Ilmu Pengetahuan Alam (Faculty of Mathematic and Natural Sciences)</option>
              <option value="option9">Fakultas Pertanian (Faculty of Agriculture)</option>
              <option value="option10">Fakultas Kedokteran Gigi (Faculty of Dentistry)</option>
              <option value="option11">Fakultas Kesehatan Masyarakat (Faculty of Public Health)</option>
              <option value="option11">Fakultas Ilmu Kelautan dan Perikanan (Faculty of Marine Sciences and Fisheries)</option>
              <option value="option11">Fakultas Kehutanan (Faculty of Forestry)</option>
              <option value="option11">Fakultas Farmasi (Faculty of Pharmacy)</option>
              <option value="option11">Fakultas Keperawatan (Faculty of Nursing Sciences)</option>
              <option value="option11">Fakultas Vokasi (Faculty of Vocational Studies)</option>
              <option value="option11">Sekolah Pascasarjana (Graduate School)</option>
              <option value="option11">Hasanuddin University</option>
            </select>
            <p>Nama Penanggung jawab (Person in Charge/Name of Unhas representative who is responsible for the guest)</p>
            <input type="text" placeholder="Your Answer...">
            <p>Dokumen Pendukung (Supporting Documents)* <br>Program Documentation (photo)/Invitation Letter/Letter of Acceptance/etc.</p>
            <input  class="addfile" type="file" id="actual-btn"/>
        </div>
        <div class="inbound-button">
              <NuxtLink to="/">
                <p>Back</p>
              </NuxtLink>
              <p>Submit</p>
        </div>
      </div>
    </div>
  </div>
</template>