import XLSX from 'xlsx';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';

interface ProductData {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: Record<string, string>;
  images: {
    main: string;
    details: string;
  };
  applications?: string;
  features?: string[];
}

const parseCatalog = () => {
  const workbook = XLSX.readFile(join(process.cwd(), 'public', 'Comet_Forward_Robots_Catalog.xlsx'));
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data: any[] = XLSX.utils.sheet_to_json(worksheet);

  const products: ProductData[] = data.map((row, index) => {
    const modelName = String(row['Модель'] || row['Model'] || `robot-${index + 1}`).trim();
    const imageName = modelName.toLowerCase();

    const specifications: Record<string, string> = {};
    Object.keys(row).forEach(key => {
      if (!['Модель', 'Model', 'Название', 'Name', 'Категория', 'Category', 'Описание', 'Description'].includes(key)) {
        if (row[key]) {
          specifications[key] = String(row[key]);
        }
      }
    });

    return {
      id: imageName.replace(/\s+/g, '-'),
      name: row['Название'] || row['Name'] || modelName,
      category: row['Категория'] || row['Category'] || 'Роботы',
      description: row['Описание'] || row['Description'] || '',
      specifications,
      images: {
        main: `${imageName}.png`,
        details: `${imageName} pd.png`
      },
      applications: row['Применение'] || row['Applications'] || '',
      features: row['Особенности'] ? String(row['Особенности']).split(',').map(f => f.trim()) : []
    };
  });

  const outputPath = join(process.cwd(), 'src', 'data', 'products.json');
  const dir = dirname(outputPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf-8');
  
  console.log(`✅ Каталог успешно обработан. Найдено ${products.length} товаров`);
  console.log(`📁 Данные сохранены в: ${outputPath}`);
};

try {
  parseCatalog();
} catch (error) {
  console.error('❌ Ошибка при парсинге каталога:', error);
  process.exit(1);
}

