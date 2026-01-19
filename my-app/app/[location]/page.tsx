import React from 'react';
import HeroSurge from '../../components/HeroSurge';
import LiveStatus from '../../components/LiveStatus';
import SchematicServices from '../../components/SchematicServices';
import LocationTrust from '../../components/LocationTrust';
import PressureForm from '../../components/PressureForm';
import SystemReviews from '../../components/SystemReviews';
import PressureFAQ from '../../components/PressureFAQ';
import FooterDiagnostic from '../../components/FooterDiagnostic';

export async function generateStaticParams() {
    const locations = [
        'galway-city-center', 'salthill', 'oranmore', 'knocknacarra', 'renmore',
        'mervue', 'ballybrit', 'claddagh', 'rahoon', 'westside',
        'doughiska', 'claregalway', 'barna', 'athenry', 'moycullen'
    ];

    return locations.map((loc) => ({
        location: loc,
    }));
}

function formatLocation(slug: string) {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
    const locationSlug = (await params).location;
    const locationName = formatLocation(locationSlug);

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <HeroSurge
                title={`${locationName} Emergency Plumbing`}
                subtitle={`Critical hydraulic response unit dispatched to the ${locationName} sector. 24/7 high-pressure restoration.`}
            />
            <LiveStatus />
            <SchematicServices />
            <LocationTrust location={locationName} />
            <PressureForm />
            <SystemReviews />
            <PressureFAQ />
            <FooterDiagnostic />
        </div>
    );
}
