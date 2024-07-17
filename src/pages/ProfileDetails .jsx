import PropTypes from 'prop-types';
import { Typography, Box, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ProfileDetails = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Profile Details
          </Typography>
          <Typography variant="body1">No profile data available.</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Profile Details
        </Typography>
        <Typography variant="body1"><strong>Name:</strong> {formData.name}</Typography>
        <Typography variant="body1"><strong>Email:</strong> {formData.email}</Typography>
        <Typography variant="body1"><strong>Age:</strong> {formData.age}</Typography>
        <Typography variant="body1"><strong>Gender:</strong> {formData.gender}</Typography>
        <Typography variant="body1"><strong>Date of Birth:</strong> {formData.dob}</Typography>
        <Typography variant="body1"><strong>Mobile:</strong> {formData.mobile}</Typography>
      </Box>
    </Container>
  );
};

ProfileDetails.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.string,
    gender: PropTypes.string,
    dob: PropTypes.string,
    mobile: PropTypes.string,
  }),
};

export default ProfileDetails;
