Vue.createApp({
    data() {
        return {
            nama: "I am Alif Fajar",
            desc: "Businessman",
            About: "About Me",
            about_desc: "Perkenalkan nama saya Alif Fajar. Saya lulusan SMK MUHAMADIYAH 1 Playen Jurusan Teknik Komputer Jaringan. Selama Sekolah, saya melakukan Beberapa bisnis Dan Jaringan komunikasi. Saya belajar bagaimana Saya Membuat jaringan kecil, Maintenence Jaringan Dan Lain lain.",
            riwayat: {
                judul: "Riwayat Sekolah",
                data: [
                    {
                        tahun: "2008-2014",
                        pendidikan: "Sekolah Dasar",
                        sekolah: "SDMuh AL - Mujahidin"
                    },
                    {
                        tahun: "2014-2017",
                        pendidikan: "Muhammadiyah School",
                        sekolah: "SMP Muh Al-Mujahidin"
                    },
                    {
                        tahun: "2017-2020",
                        pendidikan: "Sekolah menengah Kejurusan TKJ",
                        sekolah: "SMKmuh 1 Pllayen"
                    },
                ],
            },
            bahasa: {
                judul: "Bahasa",
                indo: "Indonesia",
                jawa: "Java",
                jawa1: "jowo",
            },
            artikel_judul: "Artikel",
            akun: "Akun Media Sosial",
            
            t_judul:"Tabel Keterampilan",
            table_judul: ["No.", "Keterampilan", "Skill"],
            table_data: [
                {
                    keter: "HTML",
                    skill: "Intermediatte"
                },
                {
                    keter: "CSS",
                    skill: "Intermediatte"
                },
                {
                    keter: "Javascript",
                    skill: "Intermediatte"
                },
                {
                    keter: "PHP",
                    skill: "Intermediatte"
                },
                {
                    keter: "Mysql",
                    skill: "Intermediatte"
                },
                {
                    keter: "Microsoft Word",
                    skill: "Expert"
                },
                {
                    keter: "Microsoft Power Point",
                    skill: "Expert"
                },
                {
                    keter: "Microsoft Excell",
                    skill: "Expert"
                },
                {
                    keter: "Figma",
                    skill: "Intermediatte"
                }
            ],

            artikel: [],
            article: null,

        };
    },
    methods: {
        getArticle() {
            axios
                .get(
                    "https://raw.githubusercontent.com/alifjar/tekweb2022/main/content/artikel.json"
                )
                .then((res) => {
                    console.log(res.data);
                    this.artikel = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getDataMarkdown() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const article = urlParams.get('article');
            var converter = new showdown.Converter();
            console.log(article);
            axios
                .get(
                    "https://raw.githubusercontent.com/alifjar/tekweb2022/main/content/" + article
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.article = html;
                    console.log(html);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    beforeMount() {
        this.getArticle(),
        this.getDataMarkdown()
    },
}).mount("#app");
