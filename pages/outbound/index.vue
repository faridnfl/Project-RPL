<style>
@import url("/assets/css/outbound.css");
</style>

<template>
    <div class="outbound-isi">
      <div class="outbound-board">
        <div class="outbound-top">
          <h1>OUTBOUND LECTURER, ACADEMIC STAFF, AND STUDENT<br>DATA FOR UNHAS</h1>
        </div>
        <div class="form">
          <div class="form1-outbound"> 
              <p>Nama Penginput data (Name of Data Submitter)*</p>
              <input type="text" placeholder="Jawaban Anda...">  
              <p>Nama (Name)*</p>
              <input type="text" placeholder="Jawaban Anda...">
              <p>E-mail*</p>
              <input type="text" placeholder="Jawaban Anda...">
          </div>
          <div class="form2-outbound"> 
              <p>Fakultas (Faculty)*</p>
              <input type="text" placeholder="Jika bertugas tidak atas nama Fakultas silahkan pilih Universits Hasanuddin">
              <p>Posisi (Position)*</p>
              <select>
                <option disabled selected value="">Pilih...</option>
                <option value="option1">Dosen (Lecturer)</option>
                <option value="option2">Professor</option>
                <option value="option3">Mahasiswa Sarjana (Student: Undergraduate)</option>
                <option value="option3">Mahasiswa Magister (Student: Master)</option>
                <option value="option3">Mahasiswa Doktor (Student: Doctoral/PhD)</option>
                <option value="option3">Staf Akademik (Academic Staff)</option>
              </select>
          </div>
          <div class="form3-outbound"> 
              <p>Negara Tujuan (Destination Country)*</p>
              <input type="text" placeholder="Jawaban Anda...">
              <p>Institusi Tujuan (Destination Institution)*</p>
              <input type="text" placeholder="Jawaban Anda...">
          </div>
          <div class="form4-outbound"> 
            <p>Nama Program/Event (Program/Event Name)*</p>
            <input type="text" placeholder="Jawaban Anda...">
            <p>Tujuan Outbound (Purpose of Outbound)*</p>
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
            <select>
              <option disabled selected value="">Choose...</option>
              <option value="option1">Offline</option>
              <option value="option2">Online</option>
              <option value="option4">Hybrid (Offline and Online)</option>
            </select>
            <div class="date">
              <div class="date_arrival">
                <p>Tanggal Kepulangan (Arrival Date)*</p>
                <input type="date" placeholder="Jawaban Anda...">
              </div>
              <div class="date_departure">
                <p>Tanggal Keberangkatan (Departure Date)*</p>
                <input type="date" placeholder="Jawaban Anda...">
              </div>
            </div>
            <p>Durasi Program (Program Duration)*</p>
            <input type="text" placeholder="Jawaban Anda...">
            <p>Dokumen Pendukung (Supporting Documents)* <br>Program Documentation (photo)/Invitation Letter/Letter of Acceptance/etc.</p>
            <input  class="addfile" type="file" id="actual-btn"/>
        </div>
        <p class="mitra-luar">Kontak Mitra Luar Negeri</p>
        <div class="form5-outbound"> 
              <p>Nama Mitra*</p>
              <input type="text" placeholder="Jawaban Anda...">
              <p>Email*</p>
              <input type="text" placeholder="Jawaban Anda...">
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