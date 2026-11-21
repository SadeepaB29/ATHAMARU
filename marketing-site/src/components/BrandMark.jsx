export default function BrandMark({ variant = 'teal', size = 'md' }) {
    const src =
        variant === 'ivory' ? '/images/logo-ivory.png' : '/images/logo-teal.png';

    const heightClass =
        size === 'sm'
        ? 'h-11 sm:h-12'
        : size === 'lg'
            ? 'h-20 sm:h-24'
            : 'h-14 sm:h-16';

    return (
        <img
        src={src}
        alt="ATHAMARU"
        className={`${heightClass} w-auto object-contain select-none`}
        />
    );
}