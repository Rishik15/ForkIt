import Select from 'react-select'

const cuisineOptions = [
{ value: 'american', label: 'American' },
{ value: 'italian', label: 'Italian' },
{ value: 'pizza', label: 'Pizza' },
{ value: 'sandwiches', label: 'Sandwiches' },
{ value: 'Breakfast & Brunch', label: 'Breakfast & Brunch' },
{ value: 'New American', label: 'New American' },
{ value: 'Burgers', label: 'Burgers' },
{ value: 'Seafood', label: 'Seafood' },
{ value: 'Mexican', label: 'Mexican' },
{ value: 'Salad', label: 'Salad' }


]

export default function CuisineSelect() {
  const handleChange = (selectedOptions) => {
    console.log(selectedOptions) // array of selected cuisines
  }

  return (
    <Select
      isMulti
      name="cuisines"
      options={cuisineOptions}
      className="w-100 text-black bg-current bg-transparent"
    // className="bg-base-100 text-base-content p-4 rounded-box"
      placeholder="Select cuisines..."
      onChange={handleChange}
    />
  )
}
