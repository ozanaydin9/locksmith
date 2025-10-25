'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Stack,
  Chip,
  Avatar,
  Rating
} from '@mui/material'
import { 
  Verified,
  Schedule,
  Security,
  ThumbUp,
  Star,
  WorkspacePremium,
  SupportAgent,
  Speed
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: Verified,
    title: 'Lisanslı & Sigortalı',
    description: 'Tüm çalışanlarımız lisanslı ve sigortalıdır. Güvenilir hizmet garantisi.'
  },
  {
    icon: Schedule,
    title: '7/24 Hizmet',
    description: 'Gece gündüz, hafta içi hafta sonu. Her zaman yanınızdayız.'
  },
  {
    icon: Speed,
    title: 'Hızlı Müdahale',
    description: 'Ortalama 15 dakikada olay yerine ulaşım. Acil durumlar için express hizmet.'
  },
  {
    icon: Security,
    title: 'Güvenlik Önceliği',
    description: 'Hasar vermeden açma teknikleri. Güvenliğiniz bizim önceliğimiz.'
  }
]

const stats = [
  { number: '5000+', label: 'Mutlu Müşteri', icon: ThumbUp },
  { number: '15', label: 'Yıl Tecrübe', icon: WorkspacePremium },
  { number: '15 dk', label: 'Ortalama Varış', icon: Speed },
  { number: '7/24', label: 'Kesintisiz Hizmet', icon: SupportAgent }
]

const testimonials = [
  {
    name: 'Mehmet Yılmaz',
    rating: 5,
    comment: 'Gece yarısı kapıda kaldım, 20 dakikada geldiler ve hasar vermeden açtılar. Çok memnunum.',
    location: 'Kadıköy'
  },
  {
    name: 'Ayşe Demir',
    rating: 5,
    comment: 'Araç anahtarımı içerde unutmuştum. Hızlı ve profesyonel hizmet aldım. Teşekkürler.',
    location: 'Beşiktaş'
  },
  {
    name: 'Can Özkan',
    rating: 5,
    comment: 'Kasa şifremi unutmuştum, güvenli bir şekilde açtılar. Kesinlikle tavsiye ederim.',
    location: 'Şişli'
  },
  {
    name: 'Fatma Kaya',
    rating: 5,
    comment: 'Ofis kapımız kilitlendi, toplantı öncesi çok stresliydim. Ertan Bey hemen geldi ve sorunu çözdü. Çok teşekkürler!',
    location: 'Ataşehir'
  },
  {
    name: 'Ahmet Şahin',
    rating: 5,
    comment: 'Ev kilidim bozulmuştu, güvenlik açısından endişeliydim. Aynı gün yeni kilit taktılar, çok kaliteli iş çıkardılar.',
    location: 'Üsküdar'
  },
  {
    name: 'Zeynep Arslan',
    rating: 5,
    comment: 'Anahtarımı kırdım ve evde yedek yoktu. CEM ANAHTAR sayesinde aynı gün yeni anahtar yaptırdım. Hızlı ve güvenilir.',
    location: 'Bakırköy'
  },
  {
    name: 'Murat Çelik',
    rating: 5,
    comment: 'Araç kapısı kilitlendi, içerde bebek vardı. Panik halindeyken 15 dakikada geldiler ve hemen açtılar. Hayat kurtardılar!',
    location: 'Maltepe'
  },
  {
    name: 'Elif Öztürk',
    rating: 5,
    comment: 'Pazar günü kapı kilidi bozuldu, kimse çalışmıyordu. CEM ANAHTAR 7/24 hizmet veriyor gerçekten. Çok memnunum.',
    location: 'Pendik'
  },
  {
    name: 'İbrahim Yıldız',
    rating: 5,
    comment: 'Dükkan kasasının şifresi değişmişti, çok değerli evraklar vardı. Profesyonelce açtılar, hiçbir şey zarar görmedi.',
    location: 'Fatih'
  }
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0F1B3C 0%, #081229 50%, #0F1B3C 100%)',
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
              Hakkımızda
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                mb: 4
              }}
            >
              15 yıllık tecrübemiz ve profesyonel ekibimizle İstanbul genelinde güvenilir çilingir hizmeti sunuyoruz
            </Typography>
          </Box>
        </motion.div>

        {/* Features Grid */}
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 2,
                    background: 'rgba(246, 185, 59, 0.05)',
                    border: '1px solid rgba(246, 185, 59, 0.1)',
                    height: { xs: '200px', md: '220px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'rgba(246, 185, 59, 0.3)',
                      background: 'rgba(246, 185, 59, 0.1)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #F6B93B 0%, #D4AC0D 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <feature.icon sx={{ fontSize: 28, color: '#081229' }} />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(246, 185, 59, 0.1) 0%, rgba(15, 27, 60, 0.8) 100%)',
              border: '2px solid rgba(246, 185, 59, 0.2)',
              mb: { xs: 6, md: 8 }
            }}
          >
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box 
                    sx={{ 
                      textAlign: 'center',
                      height: { xs: '120px', md: '140px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <stat.icon 
                      sx={{ 
                        fontSize: 40, 
                        color: '#F6B93B', 
                        mb: 1 
                      }} 
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: '#F6B93B',
                        mb: 0.5
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontWeight: 500 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Working Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#F6B93B',
                      mb: 3
                    }}
                  >
                    Çalışma Saatleri
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1">Pazartesi - Pazar</Typography>
                      <Chip 
                        label="7/24 Açık" 
                        color="primary" 
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1">Acil Durumlar</Typography>
                      <Typography variant="body1" sx={{ color: '#4CAF50', fontWeight: 600 }}>
                        Anında Müdahale
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1">Ortalama Varış Süresi</Typography>
                      <Typography variant="body1" sx={{ color: '#F6B93B', fontWeight: 600 }}>
                        15 Dakika
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#F6B93B',
                      mb: 3
                    }}
                  >
                    Sertifikalar & Belgeler
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Verified sx={{ color: '#4CAF50', mr: 2 }} />
                      <Typography variant="body1">Çilingir Meslek Belgesi</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Verified sx={{ color: '#4CAF50', mr: 2 }} />
                      <Typography variant="body1">Meslek Odası Üyeliği</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Verified sx={{ color: '#4CAF50', mr: 2 }} />
                      <Typography variant="body1">Sigorta Poliçesi</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Verified sx={{ color: '#4CAF50', mr: 2 }} />
                      <Typography variant="body1">İSO 9001 Kalite Belgesi</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        {/* Customer Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: '#F6B93B'
              }}
            >
              Müşteri Yorumları
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
            >
              Memnun müşterilerimizin deneyimleri
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <Card sx={{ height: { xs: '280px', md: '300px' }, display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            bgcolor: '#F6B93B',
                            color: '#081229',
                            mr: 2,
                            fontWeight: 600
                          }}
                        >
                          {testimonial.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.location}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        sx={{
                          mb: 2,
                          '& .MuiRating-iconFilled': {
                            color: '#F6B93B'
                          }
                        }}
                      />
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontStyle: 'italic',
                          lineHeight: 1.6
                        }}
                      >
                        "{testimonial.comment}"
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default About
