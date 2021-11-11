const data = [
    {
        name: '2014 Ford Mustang 4.0 AT',
        img: 'https://i.ibb.co/44D8VWr/15-1099x642-1.jpg',
        type: 'Couple',
        price: '12000',
        transmission: 'Automatic',
        wheel: '4WD',
        run: '50'
    },
    {
        name: '2018 Chevrolet Camaro',
        img: 'https://i.ibb.co/0rmLTmq/chevrolet-camaro-zl1-cornering.jpg',
        type: 'Sport Cars',
        price: '9500',
        transmission: 'Automatic',
        wheel: '4WD',
        run: '1200'
    },
    {
        name: 'Audi Q3 2016',
        img: 'https://i.ibb.co/v1ggddH/q3-1.jpg',
        type: 'suv',
        price: '8000',
        transmission: 'Automatic',
        wheel: 'AWD',
        run: '350'
    },
    {
        name: 'Tesla Model X',
        img: 'https://i.ibb.co/3kbdGbS/tesla-model-s-95d-rear.jpg',
        type: 'Suv',
        price: '70000',
        transmission: 'Automatic',
        wheel: '4WD',
        run: '450'
    },
    {
        name: 'Used 2013 Ford Focus SEL',
        img: 'https://i.ibb.co/zfRGHRV/16-1109x699-1.jpg',
        type: 'Sport Cars',
        price: '15000',
        transmission: 'Manual',
        wheel: 'AWD',
        run: '1250'
    },
    {
        name: 'Chevrolet Malibu 2016 LT',
        img: 'https://i.ibb.co/yXRNKcD/che-1.jpg',
        type: 'Couple',
        price: '19000',
        transmission: 'Automatic',
        wheel: '4WD',
        run: '750'
    },
    {
        name: '2012 Toyota Pickup Truck i7',
        img: 'https://i.ibb.co/F4qSZMn/121-1039x689-1.jpg',
        type: 'Pickup Truck',
        price: '4250',
        transmission: 'Automatic',
        wheel: 'AWD',
        run: '320'
    },
    {
        name: '2018 Bentley Scoopter X8',
        img: 'https://i.ibb.co/N6C7g3s/mini-5dr-hatch-cooper-d-dct.jpg',
        type: 'Sedan',
        price: '33400',
        transmission: 'Automatic',
        wheel: 'AWD',
        run: '5000'
    },
    {
        name: '2013 Acura Sport Version',
        img: 'https://i.ibb.co/gvZwdpq/34-1099x699-1.jpg',
        type: 'suv',
        price: '5600',
        transmission: 'Automatic',
        wheel: 'AWD',
        run: '750'
    },
    {
        name: '2019 Toyota Camry SE 350',
        img: 'https://i.ibb.co/rkgR2tF/2018-toyota-camry-mmp-1544816921.jpg',
        type: 'Sedan',
        price: '5050',
        transmission: 'Automatic',
        wheel: 'AWD',
        run: '670'
    },
    {
        name: '2012 Chevrolet Pick Truck 3.5L',
        img: 'https://i.ibb.co/gMGLH3c/post-id-2104-imz-J3-999x599-1.jpg',
        type: 'Pickup Truck',
        price: '7700',
        transmission: 'Manual',
        wheel: 'AWD',
        run: '800'
    },
    {
        name: '2015 Toyota Elantra 2.5L',
        img: 'https://i.ibb.co/ctZRxxX/toyota-rav4-0.jpg',
        type: 'Hatchback',
        price: '5500',
        transmission: 'Manual',
        wheel: '4WD',
        run: '230'
    },
    {
        name: 'Chevrolet Cruze 2016 LX',
        img: 'https://i.ibb.co/sR5GHF5/chev-1.jpg',
        type: 'Convertible',
        price: '23000',
        transmission: 'Automatic',
        wheel: '4WD',
        run: '1200'
    },
    {
        name: 'New 2019 BMW X6 Series',
        img: 'https://i.ibb.co/x5Yfkfq/122-1109x699-1.jpg',
        type: 'Sedan',
        price: '12500',
        transmission: 'Semi-Auto',
        wheel: '4WD',
        run: '650'
    },
    {
        name: 'Nissan Versa, LEATHER',
        img: 'https://i.ibb.co/X8F2nJK/nissan.jpg',
        type: 'Couple',
        price: '7600',
        transmission: 'AWD',
        wheel: 'Automatic',
        run: '800'
    },
    {
        name: 'Used 2012 Audi S5 Luxury',
        img: 'https://i.ibb.co/mctbBQ0/audi-s5-cabriolet-0.jpg',
        type: 'Convertible',
        price: '16400',
        transmission: 'Automatic',
        wheel: 'AWD',
        run: '5000'
    },
    {
        name: 'Used 2015 BMW X1 Series',
        img: 'https://i.ibb.co/sPsbbJy/x1-1.jpg',
        type: 'Sport Cars',
        price: '23000',
        transmission: 'Automatic',
        wheel: 'AWD',
        run: '9000'
    },
    {
        name: 'Kia Soul 2016',
        img: 'https://i.ibb.co/df2v2HV/kia-1.jpg',
        type: 'Couple',
        price: '15000',
        transmission: 'Automatic',
        wheel: 'AWD',
        run: '1200'
    },
    {
        name: 'Audi A3 2019 new',
        img: 'https://i.ibb.co/KXqfpN7/xehay-Audi-A3-Hatchback-2017-241017-1.jpg',
        type: 'Sedan',
        price: '18500',
        transmission: 'Manual',
        wheel: '4WD',
        run: '600'
    },
    {
        name: 'BMW 740i',
        img: 'https://i.ibb.co/8ggpBYn/bmw5353.jpg',
        type: 'Crossover',
        price: '18000',
        transmission: 'Automatic',
        wheel: 'AWD',
        run: '750'
    },
    {
        name: 'Toyota Tacoma 4WD',
        img: 'https://i.ibb.co/SwKPs75/318-1227x689-1.jpg',
        type: 'Pickup Truck',
        price: '20000',
        transmission: 'Automatic',
        wheel: '4WD',
        run: '550'
    },
    {
        name: 'Honda CR-V, Perfect condition',
        img: 'https://i.ibb.co/dkpCNLd/honda-4.jpg',
        type: 'Couple',
        price: '18000',
        transmission: 'Automatic',
        wheel: '4WD',
        run: '550'
    }
]