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
              <input type="text" v-model="formOutbound.namaPenginput" placeholder="Jawaban Anda...">  
              <p>Nama (Name)*</p>
              <input type="text" v-model="formOutbound.nama" placeholder="Jawaban Anda...">
              <p>E-mail*</p>
              <input type="text" v-model="formOutbound.email" placeholder="Jawaban Anda...">
          </div>
          <div class="form2-outbound"> 
              <p>Fakultas (Faculty)*</p>
              <input type="text" v-model="formOutbound.fakultas" placeholder="Jika bertugas tidak atas nama Fakultas silahkan pilih Universits Hasanuddin">
              <p>Posisi (Position)*</p>
              <select v-model="formOutbound.posisi">
                <option disabled selected value="">Pilih...</option>
                <option value="Dosen (Lecturer)">Dosen (Lecturer)</option>
                <option value="Professor">Professor</option>
                <option value="Mahasiswa Sarjana (Student: Undergraduate)">Mahasiswa Sarjana (Student: Undergraduate)</option>
                <option value="Mahasiswa Magister (Student: Master)">Mahasiswa Magister (Student: Master)</option>
                <option value="Mahasiswa Doktor (Student: Doctoral/PhD)">Mahasiswa Doktor (Student: Doctoral/PhD)</option>
                <option value="Staf Akademik (Academic Staff)">Staf Akademik (Academic Staff)</option>
              </select>
          </div>
          <div class="form3-outbound"> 
              <p>Negara Tujuan (Destination Country)*</p>
              <input type="text" v-model="formOutbound.negaraTujuan" placeholder="Jawaban Anda...">
              <p>Institusi Tujuan (Destination Institution)*</p>
              <input type="text" v-model="formOutbound.institusiTujuan" placeholder="Jawaban Anda...">
          </div>
          <div class="form4-outbound"> 
            <p>Nama Program/Event (Program/Event Name)*</p>
            <input type="text" v-model="formOutbound.namaProgram" placeholder="Jawaban Anda...">
            <p>Tujuan Outbound (Purpose of Outbound)*</p>
            <select v-model="formOutbound.tujuanOutbound">
              <option disabled selected value="">Choose...</option>
              <option value="Participate inshort course/training">Participate inshort course/training</option>
              <option value="Guest Lecture/Visiting Lecture/Public Lecture">Guest Lecture/Visiting Lecture/Public Lecture</option>
              <option value="Joint Research">Joint Research</option>
              <option value="Oral Presentation">Oral Presentation</option>
              <option value="MoU/MoA/IA Initiation">MoU/MoA/IA Initiation</option>
              <option value="Formation of Consortium Activity">Formation of Consortium Activity</option>
              <option value="Expo/Promotion of University">Expo/Promotion of University</option>
              <option value="Employer Reputation/Dana Abadi">Employer Reputation/Dana Abadi</option>
              <option value="Student Exchange/Summer Program">Student Exchange/Summer Program</option>
              <option value="Internship">Internship</option>
              <option value="Joint/Double Degree Program">Joint/Double Degree Program</option>
            </select>
            <p>Type of Program*</p>
            <select v-model="formOutbound.tipeProgram">
              <option disabled selected value="">Choose...</option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
              <option value="Hybrid (Offline and Online)">Hybrid (Offline and Online)</option>
            </select>
            <div class="date">
              <div class="date_arrival">
                <p>Tanggal Keberangkatan (Departure Date)* </p>
                <input type="date" v-model="formOutbound.tanggalKeberangkatan" placeholder="Jawaban Anda...">
              </div>
              <div class="date_departure">
                <p>Tanggal Kepulangan (Arrival Date)*</p>
                <input type="date" v-model="formOutbound.tanggalKepulangan" placeholder="Jawaban Anda...">
              </div>
            </div>
            <p>Durasi Program (Program Duration)*</p>
            <input type="text" v-model="formOutbound.durasiProgram" placeholder="Jawaban Anda...">
            <p>Dokumen Pendukung (Supporting Documents)* <br>Program Documentation (photo)/Invitation Letter/Letter of Acceptance/etc.</p>
            <input  class="addfile" type="file" id="actual-btn" @change="handleFileUpload"/>
        </div>
        <p class="mitra-luar">Kontak Mitra Luar Negeri</p>
        <div class="form5-outbound"> 
              <p>Nama Mitra*</p>
              <input type="text" v-model="formOutbound.namaMitra" placeholder="Jawaban Anda...">
              <p>Email*</p>
              <input type="text" v-model="formOutbound.emailMitraLuar" placeholder="Jawaban Anda...">
          </div>
        <div class="inbound-button">
              <NuxtLink to="/">
                <p>Back</p>
              </NuxtLink>
            <p @click="handleSubmit">Submit</p>
        </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const formOutbound = ref({
  namaPenginput: '',
  nama: '',
  email: '',
  fakultas: '',
  posisi: '',
  negaraTujuan: '',
  institusiTujuan: '',
  namaProgram: '',
  tujuanOutbound: '',
  tipeProgram: '',
  tanggalKeberangkatan: '',
  tanggalKepulangan: '',
  durasiProgram: '',
  namaMitra: '',
  emailMitraLuar: '',
  dokumenPendukung: '',
});

const fieldNames = {
  namaPenginput: 'Nama Penginput Data',
  nama: 'Nama',
  email: 'Email',
  fakultas: 'Fakultas',
  posisi: 'Posisi',
  negaraTujuan: 'Negara Tujuan',
  institusiTujuan: 'Institusi Tujuan',
  namaProgram: 'Nama Program/Event',
  tujuanOutbound: 'Tujuan Outbound',
  tipeProgram: 'Tipe Program',
  tanggalKeberangkatan: 'Tanggal Keberangkatan',
  tanggalKepulangan: 'Tanggal Kepulangan',
  durasiProgram: 'Durasi Program',
  namaMitra: 'Nama Mitra',
  emailMitraLuar: 'Email Mitra Luar',
  dokumenPendukung: 'Dokumen Pendukung',
};


const handleSubmit = async () => {
  for (const key in formOutbound.value) {
    if (!formOutbound.value[key]) {
      alert(`${fieldNames[key]} harus diisi!`);
      return;
    }
  }
  
  try {
    const { data: responseData } = await $fetch('http://localhost:8055/items/Outbound', {
      method: 'post',
      body: {
        namaPenginput: formOutbound.value.namaPenginput,
        nama: formOutbound.value.nama,
        email: formOutbound.value.email,
        fakultas: formOutbound.value.fakultas,
        posisi: formOutbound.value.posisi,
        negaraTujuan: formOutbound.value.negaraTujuan,
        institusiTujuan: formOutbound.value.institusiTujuan,
        namaProgram: formOutbound.value.namaProgram,
        tujuanOutbound: formOutbound.value.tujuanOutbound,
        tipeProgram: formOutbound.value.tipeProgram,
        tanggalKeberangkatan: formOutbound.value.tanggalKeberangkatan,
        tanggalKepulangan: formOutbound.value.tanggalKepulangan,
        durasiProgram: formOutbound.value.durasiProgram,
        namaMitra: formOutbound.value.namaMitra,
        emailMitraLuar: formOutbound.value.emailMitraLuar,
        dokumenPendukung: formOutbound.value.dokumenPendukung,
      },
    });
    await navigateTo('/responden')
    console.log(responseData); 
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('http://localhost:8055/files', {
      method: 'POST',
      body: formData,
    });

    const responseData = await response.json();
    formOutbound.value.dokumenPendukung = responseData.data.id; 

    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}
</script>