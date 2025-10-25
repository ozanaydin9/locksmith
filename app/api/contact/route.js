import { NextResponse } from 'next/server'

// POST handler for contact form submissions
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, message, consent } = body

    // Basic validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm alanları doldurun.' },
        { status: 400 }
      )
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Lütfen kişisel verilerin işlenmesine izin verin.' },
        { status: 400 }
      )
    }

    // Validate phone number format (basic Turkish mobile number validation)
    const phoneRegex = /^(\+90|0)?5[0-9]{9}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Lütfen geçerli bir telefon numarası girin.' },
        { status: 400 }
      )
    }

    // Validate name (no numbers, minimum 2 characters)
    if (name.length < 2 || /\d/.test(name)) {
      return NextResponse.json(
        { error: 'Lütfen geçerli bir isim girin.' },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Mesajınız en az 10 karakter olmalıdır.' },
        { status: 400 }
      )
    }

    // Log the contact form submission (in production, save to database)
    console.log('Contact form submission:', {
      name,
      phone,
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    })

    // TODO: In production, implement email sending
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: 'info@acilcilingir.com', // TODO: Replace with actual email
      from: 'noreply@acilcilingir.com', // TODO: Replace with verified sender
      subject: `Yeni İletişim Formu - ${name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
        <p><strong>Tarih:</strong> ${new Date().toLocaleString('tr-TR')}</p>
      `
    }
    
    await sgMail.send(msg)
    */

    // TODO: Alternative with Nodemailer:
    /*
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@acilcilingir.com', // TODO: Replace with actual email
      subject: `Yeni İletişim Formu - ${name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
        <p><strong>Tarih:</strong> ${new Date().toLocaleString('tr-TR')}</p>
      `
    })
    */

    // TODO: Save to database (example with Prisma):
    /*
    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()
    
    await prisma.contactSubmission.create({
      data: {
        name,
        phone,
        message,
        createdAt: new Date()
      }
    })
    */

    // TODO: Send SMS notification to business owner (example with Twilio):
    /*
    const twilio = require('twilio')
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    
    await client.messages.create({
      body: `Yeni müşteri mesajı: ${name} - ${phone}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.BUSINESS_PHONE_NUMBER
    })
    */

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin veya direkt arayın.' },
      { status: 500 }
    )
  }
}

// GET handler (optional - for health check)
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working' },
    { status: 200 }
  )
}
