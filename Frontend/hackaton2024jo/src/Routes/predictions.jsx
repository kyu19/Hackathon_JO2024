import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material'
import { useState, useEffect, React, useMemo } from 'react'
import ReactCountryFlag from 'react-country-flag'
import axios from 'axios'
import { visuallyHidden } from '@mui/utils';

const headCells = [
  {
    id: 'country',
    numeric: false,
    label: 'Pays',
  },
  {
    id: 'nbTotalMedals',
    numeric: true,
    disablePadding: false,
    label: 'Total des médailles',
  },
  {
    id: 'nbBronzeMedals',
    numeric: true,
    disablePadding: false,
    label: 'Médailles de bronze',
  },
  {
    id: "nbSilverMedals",
    numeric: true,
    disablePadding: false,
    label: "Médailles d'argent",
  },
  {
    id: 'nbGoldMedals',
    numeric: true,
    disablePadding: false,
    label: "Médailles d'or",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontWeight: 'bold' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


function Predictions() {
  const [predictions, setPredictions] = useState([])
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('nbTotalMedals');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    console.log(order)
    console.log(orderBy)
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const visibleRows = useMemo(
    () =>
      stableSort(predictions, getComparator(order, orderBy)),
    [order, orderBy],
  );

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/predictions')
      .then(response => {
        response.data.predictions.sort(() => stableSort(predictions, getComparator(order, orderBy)))
        setPredictions(response.data.predictions);
      }).catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Typography variant="h4" color={"#d6c278"} >
        Predictions
      </Typography>
      {/* <ReactCountryFlag countryCode="FR" />
      <ReactCountryFlag
        countryCode="FR"
        svg
        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
        cdnSuffix="svg"
        title="FR"
      /> */}

      <Container sx={{ marginTop: 10 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            {visibleRows != undefined }
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.country}
                  </TableCell>
                  <TableCell align="right">{row.nbTotalMedals}</TableCell>
                  <TableCell align="right">{row.nbGoldMedals}</TableCell>
                  <TableCell align="right">{row.nbSilverMedals}</TableCell>
                  <TableCell align="right">{row.nbBronzeMedals}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default Predictions
