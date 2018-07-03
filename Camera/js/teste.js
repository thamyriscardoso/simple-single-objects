const camera1 = new Camera('Canon', 'H300');
console.log(camera1.marca === 'Canon');
console.log(camera1.modelo === 'H300');
camera1.modelo = 'H560'; // não deve fazer efeito;
console.log(camera1.modelo === 'H300');
camera1.marca = 'Aro'; //não deve fazer efeito
console.log(camera1.marca === 'Canon');
camera1.novaFoto();
camera1.novaFoto();
console.log(camera1.Fotos() === 2); //true
camera1.novoVideo();
camera1.novoVideo();
console.log(camera1.Videos() === 2); //true

console.log(camera1.ligaDesligaFlash());

try {
  console.log(camera1.excluirFotos(3));
  console.log(false); // essa linha não deve ser alcançada
} catch (e) {
  console.log(e === "Você tem apenas 2 fotos para excluir."); //true
}

camera1.excluirFotos(1);
console.log(camera1.Fotos() === 1); //true;
console.log(camera1.Excluidos() === 1);

camera1.sequenciaDeFotos(50);
console.log(camera1.Fotos() === 51); //true;

try {
  console.log(camera1.sequenciaDeFotos(110));
  console.log(false); // essa linha não deve ser alcançada
} catch (e) {
  console.log(e === "Você ultrapassou o limite de fotos, a operação foi cancelada."); //true
}

camera1.excluirFotos(10);
console.log(camera1.Fotos() === 41)
console.log(camera1.Excluidos() === 11);


camera1.excluirVideos(2);
console.log(camera1.Videos()===0);

camera1.novoVideo();
console.log(camera1.Videos());
console.log(camera1.ligaDesligaFlash());

const camera2 = new Camera('Nikon', 'B500');
console.log(camera2.modelo === 'B500');
camera1.modelo = 'H560'; // não deve fazer efeito;
console.log(camera2.modelo === 'B500');
console.log(camera2.marca === 'Nikon');
camera1.marca = 'Aro'; //não deve fazer efeito
console.log(camera2.marca === 'Nikon');
camera2.sequenciaDeFotos(32);
console.log(camera2.Fotos() === 32);
console.log(camera1.ligaDesligaFlash());

camera2.novoVideo();
camera2.novoVideo();
camera2.novoVideo();
camera2.novoVideo();
camera2.novoVideo();
camera2.novoVideo();
camera2.excluirVideos(2);
console.log(camera2.Videos() === 4);

camera2.novaFoto();
camera2.novaFoto();
camera2.novaFoto();
camera2.novaFoto();
console.log(camera2.Fotos() === 36);
