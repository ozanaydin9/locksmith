'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Chip,
  Stack,
  Button
} from '@mui/material'
import { 
  LocationOn,
  AccessTime,
  DirectionsCar,
  Phone
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const serviceAreas = [
  { name: 'Kadıköy', time: '10-15 dk' },
  { name: 'Beşiktaş', time: '12-18 dk' },
  { name: 'Şişli', time: '15-20 dk' },
  { name: 'Bakırköy', time: '18-25 dk' },
  { name: 'Üsküdar', time: '12-18 dk' },
  { name: 'Fatih', time: '15-22 dk' },
  { name: 'Beyoğlu', time: '10-15 dk' },
  { name: 'Sarıyer', time: '20-30 dk' },
  { name: 'Pendik', time: '25-35 dk' },
  { name: 'Maltepe', time: '20-28 dk' },
  { name: 'Kartal', time: '22-30 dk' },
  { name: 'Ataşehir', time: '18-25 dk' },
  { name: 'Bağcılar', time: '25-35 dk' },
  { name: 'Bahçelievler', time: '20-28 dk' },
  { name: 'Zeytinburnu', time: '18-25 dk' },
  { name: 'Kağıthane', time: '15-22 dk' }
]

const MapSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [userLocation, setUserLocation] = useState(null)
  const [locationPermission, setLocationPermission] = useState('prompt')

  // Simple geolocation hook
  const requestLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          setLocationPermission('granted')
        },
        (error) => {
          console.log('Location access denied:', error)
          setLocationPermission('denied')
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      )
    }
  }

  useEffect(() => {
    // Check if geolocation permission was previously granted
    if ('permissions' in navigator) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        setLocationPermission(result.state)
        if (result.state === 'granted') {
          requestLocation()
        }
      })
    }
  }, [])

  return (
    <Box
      id="map"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #081229 0%, #0F1B3C 50%, #081229 100%)',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F6B93B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2
              }}
            >
              Hizmet Bölgemiz
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400
              }}
            >
              İstanbul genelinde hızlı ve güvenilir çilingir hizmeti
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Map */}
          <Grid item xs={12} lg={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card sx={{ height: { xs: '300px', md: '450px' } }}>
                <Box
                  className="map-container"
                  sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Google Maps Embed - CEM ANAHTAR Location */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4!2d29.0347!3d40.9881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd6570f4e1%3A0x8e1f8e8e8e8e8e8e!2sCafera%C4%9Fa%20Mah.%20Bahariye%20Cad.%20No%3A37%2C%2034710%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1699000000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CEM ANAHTAR - Kadıköy Çilingir"
                  />
                  
                  {/* Location Permission Overlay */}
                  {locationPermission === 'prompt' && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 1
                      }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<LocationOn />}
                        onClick={requestLocation}
                        sx={{
                          bgcolor: 'rgba(246, 185, 59, 0.9)',
                          color: '#081229',
                          '&:hover': {
                            bgcolor: 'rgba(246, 185, 59, 1)'
                          }
                        }}
                      >
                        Konumumu Göster
                      </Button>
                    </Box>
                  )}

                  {/* User Location Indicator */}
                  {userLocation && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        zIndex: 1
                      }}
                    >
                      <Chip
                        icon={<LocationOn />}
                        label="Konumunuz tespit edildi"
                        color="primary"
                        size="small"
                        sx={{
                          bgcolor: 'rgba(76, 175, 80, 0.9)',
                          color: 'white'
                        }}
                      />
                    </Box>
                  )}
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Service Areas */}
          <Grid item xs={12} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3, height: '100%' }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#F6B93B',
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <LocationOn sx={{ mr: 1 }} />
                    Hizmet Verdiğimiz İlçeler
                  </Typography>

                  <Box
                    sx={{
                      maxHeight: { xs: 'auto', lg: '350px' },
                      overflowY: 'auto',
                      pr: 1,
                      '&::-webkit-scrollbar': {
                        width: '4px'
                      },
                      '&::-webkit-scrollbar-track': {
                        background: 'rgba(246, 185, 59, 0.1)'
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: '#F6B93B',
                        borderRadius: '2px'
                      }
                    }}
                  >
                    <Stack spacing={2}>
                      {serviceAreas.map((area, index) => (
                        <motion.div
                          key={area.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              p: 2,
                              borderRadius: 2,
                              background: 'rgba(246, 185, 59, 0.05)',
                              border: '1px solid rgba(246, 185, 59, 0.1)',
                              transition: 'all 0.3s ease-in-out',
                              '&:hover': {
                                background: 'rgba(246, 185, 59, 0.1)',
                                borderColor: 'rgba(246, 185, 59, 0.3)',
                                transform: 'translateX(4px)'
                              }
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: 500 }}
                            >
                              {area.name}
                            </Typography>
                            <Chip
                              icon={<AccessTime />}
                              label={area.time}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(246, 185, 59, 0.2)',
                                color: '#F6B93B',
                                fontWeight: 600,
                                '& .MuiChip-icon': {
                                  color: '#F6B93B'
                                }
                              }}
                            />
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>

                  {/* Quick Contact */}
                  <Box
                    sx={{
                      mt: 3,
                      p: 2,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(246, 185, 59, 0.1) 0%, rgba(15, 27, 60, 0.8) 100%)',
                      border: '1px solid rgba(246, 185, 59, 0.3)',
                      textAlign: 'center'
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      Bölgeniz listede yok mu? Arayın, size en yakın ekibimizi yönlendirelim!
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<Phone />}
                      href="tel:+905352057513"
                      fullWidth
                    >
                      Hemen Ara
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Service Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 2,
                  background: 'rgba(246, 185, 59, 0.05)',
                  border: '1px solid rgba(246, 185, 59, 0.1)'
                }}
              >
                <DirectionsCar 
                  sx={{ 
                    fontSize: 48, 
                    color: '#F6B93B', 
                    mb: 2 
                  }} 
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Mobil Hizmet
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Tam donanımlı araçlarımızla nerede olursanız olun yanınızdayız
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 2,
                  background: 'rgba(246, 185, 59, 0.05)',
                  border: '1px solid rgba(246, 185, 59, 0.1)'
                }}
              >
                <AccessTime 
                  sx={{ 
                    fontSize: 48, 
                    color: '#F6B93B', 
                    mb: 2 
                  }} 
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Hızlı Varış
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  İstanbul trafiğine rağmen ortalama 15 dakikada olay yerindeyiz
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 2,
                  background: 'rgba(246, 185, 59, 0.05)',
                  border: '1px solid rgba(246, 185, 59, 0.1)'
                }}
              >
                <LocationOn 
                  sx={{ 
                    fontSize: 48, 
                    color: '#F6B93B', 
                    mb: 2 
                  }} 
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  GPS Takip
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Ekibimizin konumunu takip edin, tam varış süresini bilin
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default MapSection
