import eddData from './edd_full_data'

const eddCategories = [];

for (const category in eddData) {
  eddCategories.push(category)
}

export default eddCategories;