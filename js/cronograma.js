const cng = document.getElementById("cng");
const btn = document.getElementById("btn");
const cdd_t = document.getElementById("cdd-text");
const cdd_s = document.getElementById("cdd-screen");
const cdd_h1 = cdd_t.children[0], cdd_span1 = cdd_t.children[1], cdd_span2 = cdd_t.children[3], cdd_yt = cdd_t.children[4], cdd_sh = cdd_t.children[2];
var chose = false;

const cngi = [{
    sites: "calculemais, Khan Academy",
    name: "Matemática",
    yt: [{
        n: "Super Exatas",
        l: "https://yt3.ggpht.com/ytc/AKedOLRYv-ZqxMEgIF4WbH_T5RIfBxhGIN_JVy8s0mXRsg=s900-c-k-c0x00ffffff-no-rj"
    }, {
        n: "Ferretto Matemática",
        l: "https://yt3.ggpht.com/P-x6kRp61pfRiEnrz9RsLCcz2rYLVBC6t_wZC3BEbyJxk7XxZ3EYrQNdNYkyjb3HCFEZL0V_=s900-c-k-c0x00ffffff-no-rj"
    }, {
        n: "Marcos Aba",
        l: "https://yt3.ggpht.com/ytc/AKedOLR57VSLzCVQY9wENJBiafG3YpfiovEY9sd6nIqDBQ=s900-c-k-c0x00ffffff-no-rj"
    }]
},
{
    sites: "Só Português",
    name: "Gramática e Redação",
    yt: [{
        n: "Noslen",
        l: "https://yt3.ggpht.com/PfLS4BMbH3p7VBjDxGoQb_mFjg2byYfSnLyK_LHUlDN8ztZSdFapRC9JwGCJTVI12EmS6ROXtw=s900-c-k-c0x00ffffff-no-rj"
    }, {
        n: "Redação e Gramática Zica",
        l: "https://yt3.ggpht.com/ytc/AKedOLShaKtca6SyoqqHNuDX_Yz4DHw7f7eHukxlgNymGg=s900-c-k-c0x00ffffff-no-rj"
    }]
},
{
    sites: "Duolingo, Busuu",
    name: "Inglês",
    yt: [{
        n: "Professor Kenny",
        l: "https://yt3.ggpht.com/ytc/AKedOLST7ol6FCCHJ-T6waObTlP_QJmvgndsxXTCSc8=s900-c-k-c0x00ffffff-no-rj"
    }]
},
{
    sites: "Só História, História Digital",
    name: "História",
    yt: [{
        n: "Débora Aladim",
        l: "https://criadoresid.com/wp-content/uploads/2017/10/CriadoresiD_Debora_Aladim_youtuber.jpg"
    }, {
        n: "Canal Nostalgia",
        l: "https://criadoresid.com/wp-content/uploads/2016/10/criadoresid_nostalgia_canal-1.jpg"
    }]
},
{
    sites: "Geografia Visual, Só Geografia",
    name: "Geografia",
    yt: [{
        n: "Ricardo Marcílio",
        l: "https://yt3.ggpht.com/ytc/AKedOLQPj7lODcSf_rTseP0OT_bms3PzI-kAwZcS_8AkRg=s900-c-k-c0x00ffffff-no-rj"
    }]
},
{
    sites: "FisicaNET, Só física",
    name: "Física",
    yt: [{
        n: "Ciência Todo Dia",
        l: "https://yt3.ggpht.com/ytc/AKedOLRPqSvwTqTdMzwWt6FHZYvGqUjRbEfH_fiQyeAz2A=s900-c-k-c0x00ffffff-no-rj"
    }, {
        n: "Universo Narrado",
        l: "https://yt3.ggpht.com/ytc/AKedOLQZ6u41QB49UuyoPrK_f7jlAZo_hgcGevxnuMLrqw=s900-c-k-c0x00ffffff-no-rj"
    }]
},
{
    sites: "Só Química",
    name: "Química",
    yt: [{
        n: "Gabriel Cabral",
        l: "https://yt3.ggpht.com/ytc/AKedOLT83u0RPt0uxhECmUBxDXvNKm4-yM7HknqzsNfYiA=s900-c-k-c0x00ffffff-no-rj"
    }]
},
{
    sites: "biologianet, Só Biologia",
    name: "Biologia",
    yt: [{
        n: "Biologia com Samuel Cunha",
        l: "https://yt3.ggpht.com/ytc/AKedOLSNq8b5giZN5TELQ8dASPpfFECvXR_rzoUUBXSF_g=s900-c-k-c0x00ffffff-no-rj"
    }, {
        n: "Biologia Total",
        l: "https://yt3.ggpht.com/0NgDn4dtPMihWxc-oV34vacOPaTftIcRwxMfDFAdSUpZpua3oWTjgaHAae6itBqN4wQyqHsIOw=s900-c-k-c0x00ffffff-no-rj"
    }]
},
]

const proces = (n) => {
    cdd_h1.innerHTML = cngi[n].name;
    cdd_span1.innerHTML = `<i class="fas fa-search"></i> Sites de Pesquisa`;
    cdd_span2.innerHTML = `<i class="fab fa-youtube"></i> Canais no Youtube`;
    cdd_sh.innerHTML = cngi[n].sites;
    for(let i = 0; i < cngi[n].yt.length; i++){
        cdd_yt.innerHTML += `
        <div class="cdd_yt_img">
            <span>
                <img src="${cngi[n].yt[i].l}" alt="${cngi[n].yt[i].n}">
            </span>
            <span>${cngi[n].yt[i].n}</span>
        </div>
        `
    }
}

const verify = () => {
    var n = cng.value;
    if(n == "none"){
        window.alert('Selecione uma matéria!')
        return
    }
    else if(chose){
        cdd_yt.innerHTML = "";
        cdd_sh.innerHTML = "";
        proces(n);
    }
    else if(!chose){
        proces(n)
        chose = true;
    }
    
}

btn.addEventListener("click", () => verify())


