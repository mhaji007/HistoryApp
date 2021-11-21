import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import authContext from '../contexts/auth';
import loginHistoryContext from '../contexts/loginHistory';
import Layout from './Layout';
function MyAccount() {
  const { user } = useContext(authContext);
  const { getHistory, clearHistory } = useContext(loginHistoryContext);
  const loginHistory = getHistory(user.username);

  return (
    <Layout>
      {loginHistory ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">#</TableCell>
                  <TableCell align="left">Action Type</TableCell>
                  <TableCell align="left">Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loginHistory.map((row, i) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{i + 1}</TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="left">
                      {row.dateTime.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={() => clearHistory(user.username)}>
            Clear History
          </Button>
        </>
      ) : (
        <Paper>
          {
            <Typography p={2} variant="body1">
              No login/logout history available
            </Typography>
          }
        </Paper>
      )}
    </Layout>
  );
}

export default MyAccount;
