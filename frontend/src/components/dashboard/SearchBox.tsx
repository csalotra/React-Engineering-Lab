import {TextField, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'; 
interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({
  value,
  onChange,
}: SearchBoxProps){
  console.log("SearchBox rendered");
  return (
    <TextField
      value={value}
      label="Search substations..."
      placeholder="Search"
       sx={{ 
        width: '300px',
        bgcolor: '#f4f6f8',
        borderRadius: '4px',
        mb: 3,
      }}
      slotProps={{
        input: {
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
        },
      }}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
