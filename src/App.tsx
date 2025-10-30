import { Box, CssBaseline, Typography } from '@mui/material'
import img from '../design/images/preview.jpg'

function App() {

	return (
		<>
			<CssBaseline />
			<Typography variant='h1'>Hello World!</Typography>
			<Typography>Job Listings will appear here soon...</Typography>
			<Box sx={{
				maxWidth: '100%',
			}} component="img" src={img} />
		</>
	)
}

export default App
