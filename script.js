//objekat
let automobili = { 
    Audi:['70000', '2017', 'Q7'] , 
    BMW:['50000','2018','330D'] , 
    Porsche:['60000', '2016', 'Boxter'] , 
    Mercedes:['100000', '2019', 'S400']};

for(automobil in automobili){ 
    let naziv = automobil; //in za objekte , of za petlje
    let podaci_o_vozilu = automobili[automobil];

    console.log(`${naziv} model:  ${podaci_o_vozilu[2]} ,
                 godiste: ${podaci_o_vozilu[1]} ,
                 cena: ${podaci_o_vozilu[0]} eura `);
}
