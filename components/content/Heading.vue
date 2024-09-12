<template>
    <div class="mt-5 mb-3">
        <div class="row">
            <div class="col-md-12 col-lg-10">
                <h2 class="font-weight-bold display-5">
                    <ContentSlot :use="$slots.default" unwrap="h2" />
                </h2>
            </div>
        </div>
    </div>
</template>