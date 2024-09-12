<template>
    <div class="mt-5">
        <div class="row">
            <div class="col-md-12 col-lg-10">
                <h1 class="mbr-section-title mbr-fonts-style display-2">
                    <ContentSlot :use="$slots.default" unwrap="h1" />
                </h1>
            </div>
        </div>
    </div>
</template>