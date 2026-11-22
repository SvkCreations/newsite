
import React from "react";
import '../NewsSkeleton.css'

function NewsSkeleton() {
    return (
        <div className="container col-11 p-0">
            <div className="container news-card-skeleton my-5 p-0">

                {/* Image placeholder */}
                <div className="skeleton-image shimmer"></div>

                {/* Article content */}
                <div className="skeleton-content">

                    {/* Category and Date */}
                    <div className="skeleton-top">
                        <div className="skeleton-category shimmer"></div>
                        <div className="skeleton-date shimmer"></div>
                    </div>

                    {/* Headline */}
                    <div className="skeleton-title shimmer"></div>

                    {/* Description */}
                    <div className="skeleton-description shimmer"></div>

                    {/* Source */}
                    <div className="skeleton-source shimmer"></div>

                </div>
            </div>
            <div className="news-card-skeleton my-5">

                {/* Image placeholder */}
                <div className="skeleton-image shimmer"></div>

                {/* Article content */}
                <div className="skeleton-content">

                    {/* Category and Date */}
                    <div className="skeleton-top">
                        <div className="skeleton-category shimmer"></div>
                        <div className="skeleton-date shimmer"></div>
                    </div>

                    {/* Headline */}
                    <div className="skeleton-title shimmer"></div>

                    {/* Description */}
                    <div className="skeleton-description shimmer"></div>

                    {/* Source */}
                    <div className="skeleton-source shimmer"></div>

                </div>
            </div>
            <div className="news-card-skeleton my-5">

                {/* Image placeholder */}
                <div className="skeleton-image shimmer"></div>

                {/* Article content */}
                <div className="skeleton-content">

                    {/* Category and Date */}
                    <div className="skeleton-top">
                        <div className="skeleton-category shimmer"></div>
                        <div className="skeleton-date shimmer"></div>
                    </div>

                    {/* Headline */}
                    <div className="skeleton-title shimmer"></div>

                    {/* Description */}
                    <div className="skeleton-description shimmer"></div>

                    {/* Source */}
                    <div className="skeleton-source shimmer"></div>

                </div>
            </div>
        </div>
    );
}

export default NewsSkeleton;
