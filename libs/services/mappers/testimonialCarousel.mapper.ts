const mapFrom = (content: any )=> {

    const testimonialCarouselProps  = {
       testimonials: content.fields.testimonials.map((testimonial: any) => ({
        username: testimonial.fields.name, 
        date: testimonial.fields.date,
        message: testimonial.fields.testimonial
    })),
    title: 'TESTIMONIALS'
    }
    return testimonialCarouselProps
}

export default mapFrom; 