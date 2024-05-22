<style>
@import url("/assets/css/halaman-utama.css");
</style>

<template>
    <div class="isi">
        <div class="board">
            <div class="top">
                <h1>Inbound and Outbound Form<br>Hasanuddin University.</h1>
                <p>Outbound are Unhas students and lecturers who go abroad for joint programs, research, internships, student exchanges, etc. Inbound refers to students and lecturers from abroad who visit Hasanuddin University to collaborate in academic activities such as joint programs, research, internships, student exchanges.
                </p>
            </div>
            <div class="line"></div>
            <div class="bottom">
                <div class="card card1">
                    <img src="/assets/logo-unhas.png">
                    <h1>Inbound Program</h1>
                    <p>Inbound are overseas students and lecturers who visit Unhas for Joint Program, Research, BIPA, Summer Program, Short Study Program, Internship, Students Exchange, Credit-Earning or become Speakers/Participants 
                        in Seminar/Symposium/Conference, Degree Program, Double Degree Program, and Benchmark Program.</p>
                    <div class="button-bawah">
                        <NuxtLink to="/inbound">
                            <div class="button">
                                <button>Join Now</button>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="card card2">
                    <img src="/assets/logo-unhas.png">
                    <h1>Outbound Program</h1>
                    <p>Outbound adalah mahasiswa dan dosen Unhas yang ke luar negeri untuk mengikuti Joint Program, Penelitian, Summer Program, Short Study Program, Internship, Students Exchange, Credit-Earning; atau menjadi Pembicara/Peserta dalam Seminar/Simposium/Konferensi, Double Degree Program, Benchmark Program, dll.</p>
                    <div class="button-bawah">
                        <NuxtLink to="/outbound">
                            <div class="button daftar">
                                <button>Daftar Sekarang</button>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>