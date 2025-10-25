'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardActions,
  Button,
  Chip
} from '@mui/material'
import { 
  LockOpen,
  ContentCopy,
  DirectionsCar,
  Security,
  Build,
  Schedule,
  Phone,
  Star
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    id: 1,
    title: 'Acil Kapı Açma',
    description: 'Evde, ofiste veya işyerinde kilitli kaldınız mı? 7/24 acil kapı açma hizmeti ile 15 dakikada yanınızdayız.',
    icon: LockOpen,
    features: ['Hasar vermeden açma', '7/24 hizmet', '15 dk içinde varış'],
    popular: true
  },
  {
    id: 2,
    title: 'Anahtar Kopyalama',
    description: 'Tüm anahtar türleri için hızlı ve hassas kopyalama hizmeti. Ev, araç, ofis anahtarları.',
    icon: ContentCopy,
    features: ['Tüm anahtar türleri', 'Hızlı işlem', 'Garanti']
  },
  {
    id: 3,
    title: 'Araç Çilingir',
    description: 'Araç anahtarınızı içerde mi unuttunuz? Tüm araç markaları için profesyonel çilingir hizmeti.',
    icon: DirectionsCar,
    features: ['Tüm araç markaları', 'Hasar vermez', 'Sigorta kabul']
  },
  {
    id: 4,
    title: 'Kasa Açma',
    description: 'Kasa şifrenizi mi unuttunuz? Profesyonel kasa açma hizmeti ile değerli eşyalarınıza ulaşın.',
    icon: Security,
    features: ['Tüm kasa türleri', 'Güvenli açma', 'Gizlilik garantisi']
  },
  {
    id: 5,
    title: 'Kilit Değişimi',
    description: 'Güvenliğinizi artırmak için kilit değişimi ve yeni kilit montaj hizmetleri.',
    icon: Build,
    features: ['Kaliteli kilitler', 'Profesyonel montaj', 'Garanti']
  },
  {
    id: 6,
    title: 'Acil Müdahale',
    description: 'Gece yarısı da olsa, hafta sonu da olsa. 7/24 acil çilingir müdahale hizmeti.',
    icon: Schedule,
    features: ['7/24 hizmet', 'Hızlı müdahale', 'Şeffaf fiyatlandırma']
  }
]

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: { xs: '350px', md: '380px' },
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'visible',
          '&:hover': {
            '& .service-icon': {
              transform: 'scale(1.1) rotate(5deg)',
            }
          }
        }}
      >
        {service.popular && (
          <Chip
            label="En Popüler"
            color="primary"
            size="small"
            sx={{
              position: 'absolute',
              top: -8,
              right: 16,
              zIndex: 1,
              fontWeight: 600
            }}
          />
        )}
        
        <CardContent sx={{ flexGrow: 1, pt: service.popular ? 3 : 2 }}>
          {/* Service Icon */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2
            }}
          >
            <Box
              className="service-icon"
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F6B93B 0%, #D4AC0D 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease-in-out',
                mb: 2
              }}
            >
              <service.icon 
                sx={{ 
                  fontSize: 32, 
                  color: '#081229' 
                }} 
              />
            </Box>
          </Box>

          {/* Service Title */}
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              mb: 2
            }}
          >
            {service.title}
          </Typography>

          {/* Service Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              mb: 3,
              lineHeight: 1.6
            }}
          >
            {service.description}
          </Typography>

          {/* Service Features */}
          <Box sx={{ mb: 3 }}>
            {service.features.map((feature, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1
                }}
              >
                <Star 
                  sx={{ 
                    fontSize: 16, 
                    color: '#F6B93B', 
                    mr: 1 
                  }} 
                />
                <Typography variant="body2" color="text.secondary">
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>

        </CardContent>

      </Card>
    </motion.div>
  )
}

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #081229 0%, #0F1B3C 50%, #081229 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(246, 185, 59, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
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
              Hizmetlerimiz
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
              7/24 profesyonel çilingir hizmetleri ile güvenliğiniz bizim önceliğimiz
            </Typography>
          </Box>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={4} key={service.id}>
              <ServiceCard service={service} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(246, 185, 59, 0.1) 0%, rgba(15, 27, 60, 0.8) 100%)',
              border: '2px solid rgba(246, 185, 59, 0.3)',
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: '#F6B93B',
                fontWeight: 600
              }}
            >
              Acil Durumda Hemen Arayın!
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              7/24 acil çilingir hizmeti için tek tuşla ulaşın. 
              İstanbul genelinde ortalama 15 dakikada yerindeyiz.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone />}
              href="tel:+905352057513"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 700
              }}
            >
              0535 205 75 13
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Services
