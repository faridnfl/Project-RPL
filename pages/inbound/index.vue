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
            <p>Nama Tamu (Guess Name)*</p>
            <input type="text" placeholder="Your Answer...">
            <p>E-mail Tamu (Guest's email)*</p>
            <input type="text" placeholder="Your Answer...">
        </div>
        <div class="form2"> 
            <p>Kewarganegaraan (Nationality)*</p>
            <input type="text" placeholder="Your Answer...">
            <p>Institusi Asal (Home Institution)*</p>
            <input type="text" placeholder="Your Answer...">
            <p>Posisi (Position)*</p>
            <select id="options">
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
            <select id="options">
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
        </div>
      </div>
    </div>
  </div>
</template>