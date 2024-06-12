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
            <input type="text" v-model="formInbound.namaPenginput" placeholder="Your Answer...">
            <p>Nama Tamu (Guess Name)*</p>
            <input type="text" v-model="formInbound.namaTamu" placeholder="Your Answer...">
            <p>Kewarganegaraan (Nationality)*</p>
            <input v-model="formInbound.kewarganegaraanDisplay" list="countryList" placeholder="Your Answer..." autocomplete="off" @change="handleCountryChange">
            <datalist id="countryList">
              <option v-for="(code, country) in countries" :value="country">{{country}}</option>
            </datalist>
            <p>E-mail Tamu (Guest's email)*</p>
            <input type="text" v-model="formInbound.emailTamu" placeholder="Your Answer...">
        </div>
        <div class="form2"> 
            <p>Institusi Asal (Home Institution)*</p>
            <input type="text" v-model="formInbound.institusiAsal" placeholder="Your Answer...">
            <p>Posisi (Position)*</p>
            <select v-model="formInbound.posisi">
              <option disabled selected value="">Choose...</option>
              <option value="Dosen (Lecturer)">Dosen (Lecturer)</option>
              <option value="Professor">Professor</option>
              <option value="Mahasiswa Sarjana (Student: Undergraduate)">Mahasiswa Sarjana (Student: Undergraduate)</option>
              <option value="Mahasiswa Magister (Student: Master)">Mahasiswa Magister (Student: Master)</option>
              <option value="Mahasiswa Doktor (Student: Doctoral/PhD)">Mahasiswa Doktor (Student: Doctoral/PhD)</option>
              <option value="Staf Akademik (Academic Staff)">Staf Akademik (Academic Staff)</option>
            </select>
        </div>
        <div class="form3"> 
            <p>Nama Program/Event (Program/Event Name)*</p>
            <input type="text" v-model="formInbound.namaProgram" placeholder="Your Answer...">
            <p>Tujuan Inbound (Purpose of inbound)*</p>
            <select v-model="formInbound.tujuanInbound">
              <option disabled selected value="">Choose...</option>
              <option value="Participate Inshort Course/Training">Participate inshort course/training</option>
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
            <select v-model="formInbound.tipeProgram">
              <option disabled selected value="">Choose...</option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
              <option value="Hybrid (Offline and Online)">Hybrid (Offline and Online)</option>
            </select>
            <div class="date">
              <div class="date_arrival">
                <p>Tanggal Kedatangan (Arrival Date)*</p>
                <input type="date" v-model="formInbound.tanggalKedatangan" placeholder="Your Answer...">
              </div>
              <div class="date_departure">
                <p>Tanggal Keberangkatan (Departure Date)*</p>
                <input type="date" v-model="formInbound.tanggalKeberangkatan" placeholder="Your Answer...">
              </div>
            </div>
            <p>Durasi Program (Program Duration)*</p>
            <input type="text" v-model="formInbound.durasiProgram" placeholder="Your Answer...">
            <p>Penyelenggara (Host)*</p>
            <select v-model="formInbound.penyelenggara">
              <option disabled selected value="">Choose...</option>
              <option value="Fakultas Ekonomi dan Bisnis (Faculty of Economic and Business)">Fakultas Ekonomi dan Bisnis (Faculty of Economic and Business)</option>
              <option value="Fakultas Hukum (Faculty of Law)">Fakultas Hukum (Faculty of Law)</option>
              <option value="Fakultas Kedokteran (Faculty of Medicine)">Fakultas Kedokteran (Faculty of Medicine)</option>
              <option value="Fakultas Teknik (Faculty of Engineering)">Fakultas Teknik (Faculty of Engineering)</option>
              <option value="Fakultas Ilmu Sosial dan Ilmu Politik (Faculty of Social and Political Sciences)">Fakultas Ilmu Sosial dan Ilmu Politik (Faculty of Social and Political Sciences)</option>
              <option value="Fakultas Ilmu Budaya (Faculty of Cultural Sciences)">Fakultas Ilmu Budaya (Faculty of Cultural Sciences)</option>
              <option value="Fakultas Peternakan (Faculty of Animal Sciences)">Fakultas Peternakan (Faculty of Animal Sciences)</option>
              <option value="Fakultas Matematika dan Ilmu Pengetahuan Alam (Faculty of Mathematic and Natural Sciences)">Fakultas Matematika dan Ilmu Pengetahuan Alam (Faculty of Mathematic and Natural Sciences)</option>
              <option value="Fakultas Pertanian (Faculty of Agriculture)">Fakultas Pertanian (Faculty of Agriculture)</option>
              <option value="Fakultas Kedokteran Gigi (Faculty of Dentistry)">Fakultas Kedokteran Gigi (Faculty of Dentistry)</option>
              <option value="Fakultas Kesehatan Masyarakat (Faculty of Public Health)">Fakultas Kesehatan Masyarakat (Faculty of Public Health)</option>
              <option value="Fakultas Ilmu Kelautan dan Perikanan (Faculty of Marine Sciences and Fisheries)">Fakultas Ilmu Kelautan dan Perikanan (Faculty of Marine Sciences and Fisheries)</option>
              <option value="Fakultas Kehutanan (Faculty of Forestry)">Fakultas Kehutanan (Faculty of Forestry)</option>
              <option value="Fakultas Farmasi (Faculty of Pharmacy)">Fakultas Farmasi (Faculty of Pharmacy)</option>
              <option value="Fakultas Keperawatan (Faculty of Nursing Sciences)">Fakultas Keperawatan (Faculty of Nursing Sciences)</option>
              <option value="Fakultas Vokasi (Faculty of Vocational Studies)">Fakultas Vokasi (Faculty of Vocational Studies)</option>
              <option value="Sekolah Pascasarjana (Graduate School)">Sekolah Pascasarjana (Graduate School)</option>
              <option value="Hasanuddin University">Hasanuddin University</option>
            </select>
            <p>Nama Penanggung jawab (Person in Charge/Name of Unhas representative who is responsible for the guest)</p>
            <input type="text" v-model="formInbound.namaPenanggungJawab" placeholder="Your Answer...">
            <p>Dokumen Pendukung (Supporting Documents)* <br>Program Documentation (photo)/Invitation Letter/Letter of Acceptance/etc.</p>
            <input class="addfile" type="file" @change="handleFileUpload">
        </div>
        <div class="inbound-button">
              <NuxtLink to="/">
                <p>Back</p>
              </NuxtLink>
              <p @click="handleSubmit" >Submit</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const formInbound = ref({
  namaPenginput: '',
  namaTamu: '',
  kewarganegaraan: '',
  kewarganegaraanDisplay: '',  
  emailTamu: '',
  institusiAsal: '',
  posisi: '',
  namaProgram: '',
  tujuanInbound: '',
  tipeProgram: '',
  tanggalKedatangan: '',
  tanggalKeberangkatan: '',
  durasiProgram: '',
  penyelenggara: '',
  namaPenanggungJawab: '',
  dokumen: '',
});

const fieldNames = {
  namaPenginput: 'Name of Data Submitter',
  namaTamu: 'Guest Name',
  kewarganegaraan: 'Nationality',
  emailTamu: "Guest Email",
  institusiAsal: 'Home Institution',
  posisi: 'Position',
  namaProgram: 'Program/Event Name',
  tujuanInbound: 'Purpose of inbound',
  tipeProgram: 'Type of Program',
  tanggalKedatangan: 'Arrival Date',
  tanggalKeberangkatan: 'Departure Date',
  durasiProgram: 'Program Duration',
  penyelenggara: 'Host',
  namaPenanggungJawab: 'Person in Charge',
  dokumen: 'Supporting Documents',
};

const handleCountryChange = () => {
  formInbound.value.kewarganegaraan = countries[formInbound.value.kewarganegaraanDisplay] || '';
};

const handleSubmit = async () => {
  try {
    const response = await $fetch(`https://directusinboundoutbound.up.railway.app/files`);
    const responseData = await response.json();
    formInbound.value.dokumen = responseData.data.id;
  } catch (error) {
    console.error('Error:', error);
  }

  for (const key in formInbound.value) {
    if (!formInbound.value[key]) {
      alert(`${fieldNames[key]} must be filled!`);
      return;
    }
  }

  try {
    const { data: responseData } = await $fetch('https://directusinboundoutbound.up.railway.app/items/inbound', {
      method: 'post',
      body: {
        namaPenginput: formInbound.value.namaPenginput,
        namaTamu: formInbound.value.namaTamu,
        Kewarganegaraan: formInbound.value.kewarganegaraan,
        emailTamu: formInbound.value.emailTamu,
        institusiAsal: formInbound.value.institusiAsal,
        posisi: formInbound.value.posisi,
        namaProgram: formInbound.value.namaProgram,
        tujuanInbound: formInbound.value.tujuanInbound,
        tipeProgram: formInbound.value.tipeProgram,
        tanggalKedatangan: formInbound.value.tanggalKedatangan,
        tanggalKeberangkatan: formInbound.value.tanggalKeberangkatan,
        durasiProgram: formInbound.value.durasiProgram,
        penyelenggara: formInbound.value.penyelenggara,
        namaPenanggungJawab: formInbound.value.namaPenanggungJawab,
        dokumen: formInbound.value.dokumen,
      },
    });
    await navigateTo('/responden')
    console.log(responseData); 
  } catch (error) {
    for (const key in formInbound.value) {
       console.error('Error submitting form:', error);
      }
    }
}


const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('https://directusinboundoutbound.up.railway.app/files', {
      method: 'POST',
      body: formData,
    });

    const responseData = await response.json();
    formInbound.value.dokumen = responseData.data.id; 

    console.log(responseData);
  } catch (error) {
    console.error(error);
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
</script>