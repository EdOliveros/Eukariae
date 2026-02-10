export const resolveImageUrl = (image, uploadsBaseUrl) => {
    if (!image || typeof image !== 'string') return null;
    const trimmed = image.trim();
    if (!trimmed) return null;
    if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith('//')) {
        return trimmed;
    }
    if (trimmed.startsWith('/uploads')) {
        return `${uploadsBaseUrl}${trimmed.replace(/^\/uploads/, '')}`;
    }
    return `${uploadsBaseUrl}/${trimmed.replace(/^\/+/, '')}`;
};
