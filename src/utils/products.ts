import { TFunction } from 'i18next';

export interface ProductMetadata {
  id: string;
  images: {
    main: string;
    details: string;
  };
  numericSpecs: {
    dimensions?: string;
    weight?: string;
    maxSpeed?: string;
    payload?: string;
    workingTime?: string;
    batteryVoltage?: string;
    batteryCapacity?: string;
    positioningAccuracy?: string;
    protectionDegree?: string;
    operatingTemperature?: string;
  };
}

export interface ProductTranslations {
  name: string;
  category: string;
  description: string;
  specifications: {
    series?: string;
    fullName?: string;
    typeCategory?: string;
    purpose?: string;
    movementType?: string;
    navigation?: string;
    communicationProtocols?: string;
    features?: string;
    sensors?: string;
    application?: string;
  };
  applications?: string;
  features?: string[];
}

export interface Product extends ProductTranslations {
  id: string;
  images: {
    main: string;
    details: string;
  };
  specifications: Record<string, string>;
}

export const PRODUCTS_METADATA: Record<string, ProductMetadata> = {
  'dt-01': {
    id: 'dt-01',
    images: {
      main: '/d1-01 s1.png',
      details: '/d1-01 s1 pd.png'
    },
    numericSpecs: {
      dimensions: '500×420×310',
      weight: '35',
      maxSpeed: '1.5',
      payload: '50',
      workingTime: '3',
      batteryVoltage: '24',
      batteryCapacity: '12',
      protectionDegree: 'IP22',
      operatingTemperature: '-10 до +60'
    }
  },
  'dt-01-pro': {
    id: 'dt-01-pro',
    images: {
      main: '/d1-01 pro-s1.png',
      details: '/d1-01 pro-s1 pd.png'
    },
    numericSpecs: {
      dimensions: '730×460×260',
      weight: '46',
      maxSpeed: '1.5',
      payload: '120',
      workingTime: '4',
      batteryVoltage: '24',
      batteryCapacity: '20',
      protectionDegree: 'IP22',
      operatingTemperature: '-10 до +60'
    }
  },
  'dt-02-pro': {
    id: 'dt-02-pro',
    images: {
      main: '/dt-02 pro s1.png',
      details: '/dt-02 pro s1 pd.png'
    },
    numericSpecs: {
      dimensions: '980×670×268',
      weight: '—',
      maxSpeed: '1.2',
      payload: '300',
      workingTime: '3',
      batteryVoltage: '48',
      batteryCapacity: '20',
      protectionDegree: 'IP22',
      operatingTemperature: '-10 до +60'
    }
  },
  'pt-01-pro': {
    id: 'pt-01-pro',
    images: {
      main: '/york-p1.png',
      details: '/york-p1 pd.png'
    },
    numericSpecs: {
      dimensions: '995×615×435',
      weight: '—',
      maxSpeed: '1.2',
      payload: '80',
      workingTime: '2',
      batteryVoltage: '48',
      batteryCapacity: '20',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'pt-03': {
    id: 'pt-03',
    images: {
      main: '/amr-p1.png',
      details: '/amr-p1 pd.png'
    },
    numericSpecs: {
      dimensions: '1575×1065×565',
      weight: '—',
      maxSpeed: '1.5',
      payload: '200',
      workingTime: '2',
      batteryVoltage: '48',
      batteryCapacity: '40',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'mt-01': {
    id: 'mt-01',
    images: {
      main: '/amr-m1.png',
      details: '/amr-m1 pd.png'
    },
    numericSpecs: {
      dimensions: '1046×688×462',
      weight: '—',
      maxSpeed: '2.5',
      payload: '80',
      workingTime: '3',
      batteryVoltage: '24',
      batteryCapacity: '40',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'mt-04-pro': {
    id: 'mt-04-pro',
    images: {
      main: '/cmr-h1.png',
      details: '/cmr-h1 pd.png'
    },
    numericSpecs: {
      dimensions: '1535×810×465',
      weight: '110',
      maxSpeed: '2.4',
      payload: '200',
      workingTime: '2-3',
      batteryVoltage: '48',
      batteryCapacity: '20',
      positioningAccuracy: '10 см (RTK)',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'et-01': {
    id: 'et-01',
    images: {
      main: '/cmr-d1.png',
      details: '/cmr-d1 pd.png'
    },
    numericSpecs: {
      dimensions: '1365×848×488',
      weight: '—',
      maxSpeed: '5.0',
      payload: '150',
      workingTime: '2-3',
      batteryVoltage: '48',
      batteryCapacity: '20',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'ht-01-mini': {
    id: 'ht-01-mini',
    images: {
      main: '/cmr-h1 mini.png',
      details: '/cmr-h1 mini pd.png'
    },
    numericSpecs: {
      dimensions: '640×475×345',
      weight: '35',
      maxSpeed: '2.0',
      payload: '50',
      workingTime: '2-3',
      batteryVoltage: '24',
      batteryCapacity: '20',
      positioningAccuracy: '80 мм',
      protectionDegree: 'IP44',
      operatingTemperature: '-10 до +60'
    }
  },
  'ht-01': {
    id: 'ht-01',
    images: {
      main: '/ht-01 s1.png',
      details: '/ht-01 s1 pd.png'
    },
    numericSpecs: {
      dimensions: '950×610×385',
      weight: '110',
      maxSpeed: '1.8',
      payload: '120',
      workingTime: '2-3',
      batteryVoltage: '48',
      batteryCapacity: '20',
      positioningAccuracy: '50 мм',
      protectionDegree: 'IP44',
      operatingTemperature: '-10 до +60'
    }
  },
  'ht-01-max': {
    id: 'ht-01-max',
    images: {
      main: '/cmr-h2.png',
      details: '/cmr-h2 pd.png'
    },
    numericSpecs: {
      dimensions: '1110×820×835',
      weight: '—',
      maxSpeed: '1.8',
      payload: '120',
      workingTime: '2-3',
      batteryVoltage: '48',
      batteryCapacity: '20',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'ht-02': {
    id: 'ht-02',
    images: {
      main: '/cmr-d1 pro.png',
      details: '/cmr-d1 pro pd.png'
    },
    numericSpecs: {
      dimensions: '1270×756×550',
      weight: '—',
      maxSpeed: '1.5',
      payload: '240',
      workingTime: '3',
      batteryVoltage: '48',
      batteryCapacity: '40',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'ht-03': {
    id: 'ht-03',
    images: {
      main: '/cmr-d2 pro.png',
      details: '/cmr-d2 pro pd.png'
    },
    numericSpecs: {
      dimensions: '1500×1350×1250',
      weight: '—',
      maxSpeed: '1.5',
      payload: '300',
      workingTime: '3',
      batteryVoltage: '48',
      batteryCapacity: '40',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'gt-01-mini': {
    id: 'gt-01-mini',
    images: {
      main: '/gt-01 r300.png',
      details: '/gt-01 r300 pd.png'
    },
    numericSpecs: {
      dimensions: '895×600×328',
      weight: '—',
      maxSpeed: '1.2',
      payload: '50',
      workingTime: '2',
      batteryVoltage: '48',
      batteryCapacity: '20',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'gt-01': {
    id: 'gt-01',
    images: {
      main: '/gt-01 r300.png',
      details: '/gt-01 r300 pd.png'
    },
    numericSpecs: {
      dimensions: '1435×900×685',
      weight: '—',
      maxSpeed: '1.4',
      payload: '300',
      workingTime: '3',
      batteryVoltage: '48',
      batteryCapacity: '40',
      positioningAccuracy: '10 см (RTK)',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'gt-02': {
    id: 'gt-02',
    images: {
      main: '/gt-01 u300.png',
      details: '/gt-01 u300 pd.png'
    },
    numericSpecs: {
      dimensions: '1682×1353×1326',
      weight: '—',
      maxSpeed: '1.2',
      payload: '200',
      workingTime: '3',
      batteryVoltage: '48',
      batteryCapacity: '60',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'mk-01': {
    id: 'mk-01',
    images: {
      main: '/mk-01 slam.png',
      details: '/mk-01 slam pd.png'
    },
    numericSpecs: {
      dimensions: '844×550×400',
      weight: '—',
      maxSpeed: '1.2',
      payload: '200',
      workingTime: '3',
      batteryVoltage: '24',
      batteryCapacity: '40',
      positioningAccuracy: '40 мм (стандартная), 10 мм (с вспомогательным позиционированием)',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'searobot-01': {
    id: 'searobot-01',
    images: {
      main: '/searobot-01.png',
      details: '/searobot-01 pd.png'
    },
    numericSpecs: {
      dimensions: '1030×615×688',
      weight: '—',
      maxSpeed: '1.2',
      payload: '80',
      workingTime: '2',
      batteryVoltage: '48',
      batteryCapacity: '20',
      positioningAccuracy: '50 мм',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'gt-01-r300-(rtk)': {
    id: 'gt-01-r300-(rtk)',
    images: {
      main: '/gt-01 r300 (rtk).png',
      details: '/gt-01 r300 (rtk) pd.png'
    },
    numericSpecs: {
      dimensions: '—',
      weight: '—',
      maxSpeed: '—',
      payload: '—',
      workingTime: '—',
      batteryVoltage: '—',
      batteryCapacity: '—',
      positioningAccuracy: '10 см (RTK)',
      protectionDegree: '—',
      operatingTemperature: '—'
    }
  },
  'gt-01-u300': {
    id: 'gt-01-u300',
    images: {
      main: '/gt-01 u300.png',
      details: '/gt-01 u300 pd.png'
    },
    numericSpecs: {
      dimensions: '—',
      weight: '—',
      maxSpeed: '—',
      payload: '—',
      workingTime: '—',
      batteryVoltage: '—',
      batteryCapacity: '—',
      protectionDegree: 'IP65',
      operatingTemperature: '-10 до +60'
    }
  }
};

const mergeProductData = (id: string, translations: ProductTranslations): Product | null => {
  const metadata = PRODUCTS_METADATA[id];
  if (!metadata) {
    return null;
  }

  const specifications: Record<string, string> = {
    ...translations.specifications,
    ...metadata.numericSpecs
  };

  return {
    ...translations,
    id: metadata.id,
    images: metadata.images,
    specifications
  };
};

export const getProducts = (t: TFunction): Product[] => {
  const productsData = t('products', { returnObjects: true, defaultValue: {} }) as Record<string, ProductTranslations>;
  
  if (!productsData || typeof productsData !== 'object') {
    return [];
  }
  
  const products: Product[] = [];
  
  for (const id of Object.keys(PRODUCTS_METADATA)) {
    const translations = productsData[id];
    if (translations) {
      const product = mergeProductData(id, translations);
      if (product) {
        products.push(product);
      }
    }
  }
  
  return products;
};

export const getProduct = (id: string, t: TFunction): Product | undefined => {
  const translation = t(`products.${id}`, { returnObjects: true, defaultValue: null }) as ProductTranslations | null;
  
  if (!translation) {
    return undefined;
  }
  
  return mergeProductData(id, translation) || undefined;
};
