import Select from 'react-select'

const cuisineOptions = [
{ value: 'restaurant', label: 'restaurant' },
{ value: 'bar', label: 'bar' },
{ value: 'bakery', label: 'bakery' },
{ value: 'cafe', label: 'cafe' }


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
