//======================
//   Puerto
//======================

process.env.PORT = process.env.PORT || 3000
//======================
//   Entorno
//======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
//======================
//   Database
//======================
let urlDB;
 if (process.env.NODE_ENV === 'dev')
 {
     urlDB = 'mongodb://localhost:27017/Cafe';
 }else {
    urlDB = 'mongodb+srv://srvgeo:Jorg3arI@cluster0.uhnnf.mongodb.net/cafe';
}
process.env.URLDB = urlDB;

