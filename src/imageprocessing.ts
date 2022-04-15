import sharp from 'sharp';

const editImage = async (
  inputFilepath: string,
  outputFileName: string,
  width: number,
  height: number
) => {
  try {
    await sharp(`${inputFilepath}`)
      .resize(width, height)
      .toFile(`./public/${outputFileName}_${width}_${height}.jpg`);
    console.log('editing successeded');
  } catch (err) {
    console.log('editing failed');
    throw err;
  }
};

export { editImage };
