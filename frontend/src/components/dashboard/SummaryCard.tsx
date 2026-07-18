import {Card, CardContent, Typography, Stack, Avatar} from "@mui/material";
import type { SummaryCardConfig } from "../../types/SummaryCard";

export default function SummaryCard({
  title,
  value,
  icon,
  color,
}: SummaryCardConfig){
    return (
    <Card sx={{
        height: "100%",
        transition: "0.2s",
        "&:hover": {
            boxShadow: 6,
        },
    }}>
      <CardContent>
        <Stack spacing={3} >
          <Stack 
          direction="row"
          spacing={2} 
          sx={{alignItems:'center'}}
        >
              <Avatar 
                sx={{
                  bgcolor: `${color}.main`,
                }}
              >
              {icon}
            </Avatar>
            <Typography 
              variant="subtitle1"
              color="text.secondary"
            >
                {title}
            </Typography>
          </Stack>
          <Typography 
            variant="h4"
            sx={{fontWeight:"bold"}}
          >
              {value}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}