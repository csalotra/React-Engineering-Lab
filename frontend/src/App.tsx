import SubstationTable from './components/SubstationTable'
import EditThresholdDrawer from './components/EditThresholdDrawer'
import MainLayout from './components/layout/MainLayout'
import './App.css'
import SummaryCards from './components/dashboard/SummaryCards'
import SearchBox from './components/dashboard/SearchBox'
import { Stack } from '@mui/material'
import useSubstationSearch from './hooks/useSubstationSearch'
import useSubstations from './hooks/useSubstations'
import useThresholdEditor from './hooks/useThresholdEditor'

function App() {
  console.log("App rendered");

  const {
    substations,
    updateThreshold,
  } = useSubstations();

  const {
    drawerOpen,
    selectedSubstation,
    startEditing,
    cancelEditing,
  } = useThresholdEditor();
  
  const {
    searchText,
    setSearchText,
    filteredSubstations
  } = useSubstationSearch(substations);

  return (
    <MainLayout>
      <Stack spacing={3}>
      <SummaryCards substations={substations}/>
      <SearchBox
        value= {searchText}
        onChange={setSearchText}
      />
      <SubstationTable 
        substations={filteredSubstations} 
        onEdit={startEditing}
      />
      <EditThresholdDrawer
          open={drawerOpen}
          onClose= {cancelEditing} 
          onApply={updateThreshold} 
          substation={selectedSubstation}
      />
      </Stack>
    </MainLayout>
  )
}

export default App
