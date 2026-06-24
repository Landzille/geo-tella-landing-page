import ComingSoon from '@/components/comingSoon'
import Copyright from '@/components/copyright'
import Footer from '@/components/footer'
import MagazineGrid from '@/components/magazineGrid'
import MagazineHeroSection from '@/components/magazineHero'
import React from 'react'

const Magazines = () => {
    return (
        <>
            <MagazineHeroSection />
            <MagazineGrid />
            <ComingSoon />
            <Footer />
            <Copyright />
        </>
    )
}

export default Magazines