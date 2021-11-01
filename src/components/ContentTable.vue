<template>
    <main class="page-content-table" v-if="data">
        <div class="table-container">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Keywords</th>
                        <th>Description</th>
                        <th>Items Count</th>
                        <th>Status</th>
                        <th>Author</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(content, key) in data.list" :key="key">
                        <td>{{ content.id }}</td>
                        <td>{{ content.name }}</td>
                        <td>{{ content.content_type_name }}</td>
                        <td>{{ content.keywords.join(',') }}</td>
                        <td>{{ content.description }}</td>
                        <td>{{ content.items_count }}</td>
                        <td>{{ content.publish_status }}</td>
                        <td>{{ content.author_name }}</td>
                        <td>{{ content.create_at | formatDate }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
export default {
    name: 'content-table',
    props: ['data'],
}
</script>
