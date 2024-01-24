const mapFrom = (content)=> {

    const testimonialCarouselProps  = {
       testimonials: content.fields.testimonials.map(testimonial => ({
        username: testimonial.fields.name, 
        date: testimonial.fields.date,
        message: testimonial.fields.testimonial
    })),
    title: 'TESTIMONIALS'
    }
    return testimonialCarouselProps
}

export default mapFrom; 