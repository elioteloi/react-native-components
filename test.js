// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import data from './src/data.json';

// function CarFilter() {
//   const [cars, setCars] = useState(data);
//   const [filterBrand, setFilterBrand] = useState('');
//   const [filterModel, setFilterModel] = useState('');
//   const [selectedLanguage, setSelectedLanguage] = useState();

//   const brands = [...new Set(cars.map(car => car.brand))];
//   const models = [
//     ...new Set(
//       cars.filter(car => car.brand === filterBrand).map(car => car.model),
//     ),
//   ];
//   const filteredCars = cars.filter(car => {
//     if (filterBrand && car.brand !== filterBrand) {
//       return false;
//     }
//     if (filterModel && car.model !== filterModel) {
//       return false;
//     }
//     return true;
//   });

//   return (
//     <View>
//       <Picker
//         selectedValue={filterBrand}
//         onValueChange={value => setFilterBrand(value)}>
//         <Picker.Item label="Select a brand" value="" />
//         {brands.map(brand => (
//           <Picker.Item key={brand} label={brand} value={brand} />
//         ))}
//       </Picker>

//       <Picker
//         selectedValue={filterModel}
//         onValueChange={value => setFilterModel(value)}>
//         <Picker.Item label="Select a model" value="" />
//         {models.map(model => (
//           <Picker.Item key={model} label={model} value={model} />
//         ))}
//       </Picker>

//       <View>
//         {filteredCars.map(car => (
//           <Text key={car.id}>
//             {car.brand} {car.model}
//           </Text>
//         ))}
//       </View>
//     </View>
//   );
// }

// export default CarFilter;
