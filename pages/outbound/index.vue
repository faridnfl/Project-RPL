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
            <p>Fakultas (Faculty)*</p>
            <input v-model="formOutbound.fakultas" list="facultyList" placeholder="Jika bertugas tidak atas nama Fakultas silahkan pilih Universitas Hasanuddin" autocomplete="off">
            <datalist id="facultyList">
              <option v-for="faculty in faculties" :key="faculty" :value="faculty">{{ faculty }}</option>
            </datalist>
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
              <input v-model="formOutbound.negaraTujuanDisplay" list="countryList" placeholder="Jawaban Anda..." autocomplete="off" @change="handleCountryChange">
              <datalist id="countryList">
                <option v-for="(code, country) in countries" :value="country">{{country}}</option>
              </datalist>
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
  negaraTujuanDisplay: '',
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

const handleCountryChange = () => {
  formOutbound.value.negaraTujuan = countries[formOutbound.value.negaraTujuanDisplay] || '';
};



const handleSubmit = async () => {
  for (const key in formOutbound.value) {
    if (!formOutbound.value[key]) {
      alert(`${fieldNames[key]} harus diisi!`);
      return;
    }
  }
  
  try {
    const { data: responseData } = await $fetch('https://directusinboundoutbound.up.railway.app/items/outbound', {
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
    
    const response = await fetch('https://directusinboundoutbound.up.railway.app/files', {
      method: 'POST',
      body: formData,
    });

    const textResponse = await response.text(); // Ambil respon sebagai teks
    console.log('Raw response:', textResponse);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Cek apakah respon kosong
    if (!textResponse) {
      throw new Error('Empty response from server');
    }

    let responseData;
    try {
      responseData = JSON.parse(textResponse); // Parsing secara manual
    } catch (jsonError) {
      throw new Error('Failed to parse JSON response: ' + jsonError.message);
    }

    // Pastikan data dan id ada dalam respon
    if (!responseData.data || !responseData.data.id) {
      throw new Error('Invalid response format');
    }

    formInbound.value.dokumen = responseData.data.id; 
    console.log(responseData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}



const countries = {
  'Afghanistan': 'AF', 'Albania': 'AL', 'Algeria': 'DZ', 'Andorra': 'AD', 'Angola': 'AO', 'Antigua and Barbuda': 'AG', 'Argentina': 'AR', 'Armenia': 'AM', 'Australia': 'AU', 'Austria': 'AT',
  'Azerbaijan': 'AZ', 'Bahamas': 'BS', 'Bahrain': 'BH', 'Bangladesh': 'BD', 'Barbados': 'BB', 'Belarus': 'BY', 'Belgium': 'BE', 'Belize': 'BZ', 'Benin': 'BJ', 'Bhutan': 'BT', 'Bolivia': 'BO',
  'Bosnia and Herzegovina': 'BA', 'Botswana': 'BW', 'Brazil': 'BR', 'Brunei': 'BN', 'Bulgaria': 'BG', 'Burkina Faso': 'BF', 'Burundi': 'BI', 'Cabo Verde': 'CV', 'Cambodia': 'KH', 'Cameroon': 'CM',
  'Canada': 'CA', 'Central African Republic': 'CF', 'Chad': 'TD', 'Chile': 'CL', 'China': 'CN', 'Colombia': 'CO', 'Comoros': 'KM', 'Congo (Brazzaville)': 'CG', 'Congo (Kinshasa)': 'CD', 'Costa Rica': 'CR',
  'Croatia': 'HR', 'Cuba': 'CU', 'Cyprus': 'CY', 'Czechia': 'CZ', 'Denmark': 'DK', 'Djibouti': 'DJ', 'Dominica': 'DM', 'Dominican Republic': 'DO', 'Ecuador': 'EC', 'Egypt': 'EG', 'El Salvador': 'SV',
  'Equatorial Guinea': 'GQ', 'Eritrea': 'ER', 'Estonia': 'EE', 'Eswatini': 'SZ', 'Ethiopia': 'ET', 'Fiji': 'FJ', 'Finland': 'FI', 'France': 'FR', 'Gabon': 'GA', 'Gambia': 'GM', 'Georgia': 'GE',
  'Germany': 'DE', 'Ghana': 'GH', 'Greece': 'GR', 'Grenada': 'GD', 'Guatemala': 'GT', 'Guinea': 'GN', 'Guinea-Bissau': 'GW', 'Guyana': 'GY', 'Haiti': 'HT', 'Honduras': 'HN', 'Hungary': 'HU',
  'Iceland': 'IS', 'India': 'IN', 'Indonesia': 'ID', 'Iran': 'IR', 'Iraq': 'IQ', 'Ireland': 'IE', 'Israel': 'IL', 'Italy': 'IT', 'Jamaica': 'JM', 'Japan': 'JP', 'Jordan': 'JO', 'Kazakhstan': 'KZ',
  'Kenya': 'KE', 'South Korea': 'KR', 'Kuwait': 'KW', 'Kyrgyzstan': 'KG', 'Laos': 'LA', 'Latvia': 'LV', 'Lebanon': 'LB', 'Lesotho': 'LS', 'Liberia': 'LR', 'Libya': 'LY', 'Liechtenstein': 'LI',
  'Lithuania': 'LT', 'Luxembourg': 'LU', 'Madagascar': 'MG', 'Malawi': 'MW', 'Malaysia': 'MY', 'Maldives': 'MV', 'Mali': 'ML', 'Malta': 'MT', 'Marshall Islands': 'MH', 'Mauritania': 'MR',
  'Mauritius': 'MU', 'Mexico': 'MX', 'Micronesia': 'FM', 'Moldova': 'MD', 'Monaco': 'MC', 'Mongolia': 'MN', 'Montenegro': 'ME', 'Morocco': 'MA', 'Mozambique': 'MZ', 'Myanmar': 'MM', 'Namibia': 'NA',
  'Nauru': 'NR', 'Nepal': 'NP', 'Netherlands': 'NL', 'New Zealand': 'NZ', 'Nicaragua': 'NI', 'Niger': 'NE', 'Nigeria': 'NG', 'North Korea': 'KP', 'North Macedonia': 'MK', 'Norway': 'NO', 'Oman': 'OM',
  'Pakistan': 'PK', 'Palau': 'PW', 'Palestine': 'PS', 'Panama': 'PA', 'Papua New Guinea': 'PG', 'Paraguay': 'PY', 'Peru': 'PE', 'Philippines': 'PH', 'Poland': 'PL', 'Portugal': 'PT', 'Qatar': 'QA',
  'Romania': 'RO', 'Russia': 'RU', 'Rwanda': 'RW', 'Saint Kitts and Nevis': 'KN', 'Saint Lucia': 'LC', 'Saint Vincent and the Grenadines': 'VC', 'Samoa': 'WS', 'San Marino': 'SM', 'Sao Tome and Principe': 'ST',
  'Saudi Arabia': 'SA', 'Senegal': 'SN', 'Serbia': 'RS', 'Seychelles': 'SC', 'Sierra Leone': 'SL', 'Singapore': 'SG', 'Slovakia': 'SK', 'Slovenia': 'SI', 'Solomon Islands': 'SB', 'Somalia': 'SO',
  'South Africa': 'ZA', 'South Sudan': 'SS', 'Spain': 'ES', 'Sri Lanka': 'LK', 'Sudan': 'SD', 'Suriname': 'SR', 'Sweden': 'SE', 'Switzerland': 'CH', 'Syria': 'SY', 'Tajikistan': 'TJ', 'Tanzania': 'TZ',
  'Thailand': 'TH', 'Timor-Leste': 'TL', 'Togo': 'TG', 'Tonga': 'TO', 'Trinidad and Tobago': 'TT', 'Tunisia': 'TN', 'Turkey': 'TR', 'Turkmenistan': 'TM', 'Tuvalu': 'TV', 'Uganda': 'UG', 'Ukraine': 'UA',
  'United Arab Emirates': 'AE', 'United Kingdom': 'GB', 'United States of America': 'US', 'Uruguay': 'UY', 'Uzbekistan': 'UZ', 'Vanuatu': 'VU', 'Venezuela': 'VE', 'Vietnam': 'VN', 'Yemen': 'YE',
  'Zambia': 'ZM', 'Zimbabwe': 'ZW'
}

const faculties = [
  'Ekonomi dan Bisnis',
  'Hukum',
  'Kedokteran',
  'Teknik',
  'Ilmu Sosial dan Ilmu Politik',
  'Ilmu Budaya',
  'Peternakan',
  'Matematika dan Ilmu Pengetahuan Alam',
  'Pertanian',
  'Kedokteran Gigi',
  'Kesehatan Masyarakat',
  'Ilmu Kelautan dan Perikanan',
  'Kehutanan',
  'Farmasi',
  'Keperawatan',
  'Vokasi',
  'Universitas Hasanuddin'
];

</script>