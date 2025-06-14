import Select from 'react-select'

const cuisineOptions = [
  
{ value: 'Wheelchair_Accessible_Entrance', label: 'Wheelchair Accessible Entrance' },
{ value: 'Dine_In', label: 'Dine-In' },
{ value: 'Reservable', label: 'Reservable' },
{ value: 'Serves_Beer', label: 'Serves Beer' },
{ value: 'Serves_Breakfast', label: 'Serves Breakfast' },
{ value: 'Serves_Brunch', label: 'Serves Brunch' },
{ value: 'Serves_Dinner', label: 'Serves Dinner' },
{ value: 'Serves_Lunch', label: 'Serves Lunch' },
{ value: 'Serves_Vegetarian_Food', label: 'Serves Vegetarian Food' },
{ value: 'Serves_Wine', label: 'Serves Wine' }



]

export default function PreferencesSelect() {
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
